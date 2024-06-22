import {
  Controller,
  Middlewares,
  Post,
  Route,
  Tags,
  Request,
  Body,
  Put,
  Path,
  Get,
} from "tsoa";
import { verifyToken } from "@application/middlewares/tokenValidation";
import { ApplicationService } from "@application/services/application.service";
import APIError from "@application/errors/api-error";
import { logger } from "@application/utils/logger";
import { StatusCode } from "@application/utils/consts";
import { validateInput } from "@application/middlewares/input-validation";
import { formResponseSchema } from "@application/schemas/application.schema";
import axios from "axios";

interface AnswerProp {
  label: string;
  answer: any;
}

interface UserProp {
  name: string;
  email: string;
  phonenumber: string;
  address: string;
}

interface ResponseBodyProp {
  eventId: string;
  userInfo: UserProp;
  responses: AnswerProp[];
}

interface FormSubmit {
  eventId: string;
  userId: string;
  submitOn: string;
  userInfo: UserProp;
  responses: AnswerProp[];
}

const AppService = new ApplicationService();

@Route("/v1/application")
@Tags("Application")
export class ApplicationController extends Controller {
  // Apply for Event

  @Post("/")
  @Middlewares(validateInput(formResponseSchema))
  @Middlewares(verifyToken)
  public async ApplyEvent(
    @Request() request: any,
    @Body() body: ResponseBodyProp
  ): Promise<any> {
    try {
      logger.info("Under user Id");
      const userId = request.id;

      logger.info("userId : ", userId);

      const formSubmit: FormSubmit = {
        userId: userId,
        submitOn: new Date().toISOString(),
        ...body,
      };
      logger.info("formSubmit: ", formSubmit);

      const formSubmitEvent = await AppService.applyEvent(formSubmit);

      return {
        message: "Application has been submitted",
        data: formSubmitEvent,
      };
    } catch (error: unknown | any) {
      throw new APIError(
        "Error during application submission",
        StatusCode.InternalServerError
      );
    }
  }

  // Update Status if they passed or failed

  @Put("/:Id")
  public async updateStatus(
    @Path() Id: string,
    @Body() body: any
  ): Promise<any> {
    try {
      const { status } = body;
      const formupdate = await AppService.updateStatus(Id, status);

      return {
        message: "Form has been updated!",
        data: formupdate,
      };
    } catch (error: unknown | any) {
      throw new APIError("Error during updating status", error);
    }
  }

  //todo: get all applied
  //1. get id of host by token
  //2. find the event by their id
  //3. find all the user that applied by the event id
  @Get("/")
  @Middlewares(verifyToken)
  public async findAllApplied(@Request() request: any): Promise<any> {
    try {
      //step 2
      const event = await axios.get(
        `http://event:3004/v1/events/host/${request.id}`
      );
      //step 3
      const applied = await AppService.findAppliedById(event.data.data[0]._id);

      console.log("nis neak applied", applied.length);

      return {
        message: "All applications fetched successfully",
        data: applied,
      };
    } catch (error: unknown | any) {
      console.log("Error hz ov", error);
      throw new APIError("Error during fetching all applications", error);
    }
  }
}
