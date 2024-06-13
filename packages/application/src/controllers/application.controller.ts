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
} from "tsoa";
import { verifyToken } from "@application/middlewares/tokenValidation";
import { ApplicationService } from "@application/services/application.service";
import APIError from "@application/errors/api-error";
import { logger } from "@application/utils/logger";
import { StatusCode } from "@application/utils/consts";
import { validateInput } from "@application/middlewares/input-validation";
import { formResponseSchema } from "@application/schemas/application.schema";

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
}
