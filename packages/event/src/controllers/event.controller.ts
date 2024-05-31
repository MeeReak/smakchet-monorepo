import { EventDetail } from "@event/databases/@types/event.interface";
import APIError from "@event/Errors/api-error";
import { validateInput } from "@event/middlewares/input-validation";
import { verifyToken } from "@event/middlewares/tokenValidation";
import { EventDetailSchema } from "@event/schemas/event.schema";
import { EventService } from "@event/services/event.service";
import { StatusCode } from "@event/utils/consts";
import {
  Body,
  Controller,
  Delete,
  Get,
  Middlewares,
  Path,
  Post,
  Put,
  Request,
  Route,
  Query,
} from "tsoa";

const eventService = new EventService();

@Route("/v1/events")
export class EventController extends Controller {
  @Get("/name")
  public async FindEventByName(@Query() name: string): Promise<any> {
    try {
      return await eventService.findEventByName(name);
    } catch (error: unknown) {
      throw new APIError("Event Not Found !!", StatusCode.NotFound);
    }
  }

  @Get("/cate")
  public async FindEventByCate(@Query() cate: string): Promise<any> {
    try {
      const event = await eventService.findEventByCategory(cate);
      return event;
    } catch (error: unknown) {
      throw new APIError("Event Not Found !!", StatusCode.NotFound);
    }
  }

  @Post("/")
  @Middlewares(validateInput(EventDetailSchema))
  @Middlewares(verifyToken)
  public async CreateEvent(
    @Body() requestBody: EventDetail,
    @Request() request: any
  ): Promise<any> {
    try {
      if (request.role == "Volunteer") {
        throw new APIError(
          "You do not have permission to access this resource",
          StatusCode.Forbidden
        );
      }

      const detailEvent = { ...requestBody, orgId: request.id };
      const event = await eventService.createEvent(detailEvent);
      return {
        message: "Event Created Successfully!",
        data: event,
      };
    } catch (error: unknown) {
      throw new APIError(
        "An error occurred during event creation. Please try again later",
        StatusCode.InternalServerError
      );
    }
  }

  @Put("/:id")
  @Middlewares(verifyToken)
  public async UpdateEvent(
    @Request() request: any,
    @Path() id: string,
    @Body() requestBody: EventDetail
  ): Promise<any> {
    try {
      if (request.role == "Volunteer") {
        throw new APIError(
          "You do not have permission to access this resource",
          StatusCode.Forbidden
        );
      }

      const existedEvent = await eventService.findEventByOrgId(request.id);

      if (!existedEvent) {
        throw new APIError("Event Not Found !!", StatusCode.NotFound);
      }

      const event = await eventService.updateEvent(id, requestBody);

      return {
        message: "Event Updated Successfully!",
        data: event,
      };
    } catch (error: unknown) {
      throw new APIError(
        "An error occurred during event update. Please try again later",
        StatusCode.InternalServerError
      );
    }
  }

  @Middlewares(verifyToken)
  @Delete("/:id")
  public async DeleteEvent(@Path() id: string, @Request() request: any) {
    try {
      if (request.role == "Volunteer") {
        throw new APIError(
          "You do not have permission to access this resource",
          StatusCode.Forbidden
        );
      }

      const existedEvent = await eventService.findEventByOrgId(request.id);

      if (!existedEvent) {
        throw new APIError("Event Not Found !!", StatusCode.NotFound);
      }

      await eventService.deleteEvent(id);
      return { message: "Event Deleted Successfully!" };
    } catch (error: unknown) {
      throw new APIError(
        "An error occurred during event deletion. Please try again later",
        StatusCode.InternalServerError
      );
    }
  }

  @Get("/:id")
  @Middlewares(verifyToken)
  public async FindFavoEvent(
    @Path() id: string,
    @Request() request: any
  ): Promise<any> {
    try {
      const existedEvent = await eventService.findEventByOrgId(request.id);

      if (!existedEvent) {
        throw new APIError("Event Not Found !!", StatusCode.NotFound);
      }
      const event = await eventService.findEventById(id);
      return event;
    } catch (error: unknown) {
      throw new APIError("Event Not Found !!", StatusCode.NotFound);
    }
  }

  @Get("/")
  public async FindAllUser(): Promise<any> {
    try {
      const event = await eventService.findAllUser();

      if (event.length === 0) {
        throw new APIError("Event Not Found !!", StatusCode.NotFound);
      }
      return event;
    } catch (error: unknown) {
      throw error;
    }
  }
}
