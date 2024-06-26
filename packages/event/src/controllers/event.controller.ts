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
  Queries,
} from "tsoa";

export interface QueryParams {
  name?: string;
  cate?: string;
  id?: string;
  page: string;
  limit: string;
  date?: string;
  location?: string;
}

const eventService = new EventService();

@Route("/v1/events")
export class EventController extends Controller {
  //find event by id, name, cate
  @Get("/")
  public async FindEventByName(
    @Queries() queryParam: QueryParams
  ): Promise<any> {
    try {
      console.log(queryParam);
      return await eventService.findEventByQueries(queryParam);
    } catch (error: unknown) {
      throw new APIError("Event Not Found !!", StatusCode.NotFound);
    }
  }

  @Get("/trending")
  public async FindTrendingEvent(): Promise<any> {
    try {
      console.log("Get Trending");
      const event = await eventService.FindEventByView();
      return event;
    } catch (error: unknown) {
      throw new APIError("Event Not Found !!", StatusCode.NotFound);
    }
  }

  // Get user event

  @Get("/myevent")
  @Middlewares(verifyToken)
  public async findMyEvent(@Request() request:any) : Promise<any>{
    try{
      const id = request.id;
      console.log("id in findMyEvent : " , id);
      const data = await eventService.findAllEventByOrgId(id);
      console.log("data in findMyEvent : " , data);
      return data;
    }catch(error:unknown | any){
      throw new APIError(error.message, StatusCode.NotFound);
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

      const detailEvent = { ...requestBody, orgId: request.id, viewer: 0 };
      const event = await eventService.createEvent(detailEvent);
      return {
        message: "Event Created Successfully!",
        data: event,
      };
    } catch (error: unknown) {
      // throw new APIError(
      //   "An error occurred during event creation. Please try again later",
      //   StatusCode.InternalServerError
      // );
      throw error;
    }
  }

  @Put("/{id}")
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

  @Post("{eventId}/update-view")
  public async UpdateView(@Path() eventId: string): Promise<any> {
    try {
      console.log("Helo")
      const event = await eventService.UpdateView(eventId);
      return event;
    } catch (error: unknown) {
      throw new APIError(
        "An error occurred during event update. Please try again later",
        StatusCode.InternalServerError
      );
    }
  }

  @Delete("/{id}")
  @Middlewares(verifyToken)
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

  @Get("/{id}")
  @Middlewares(verifyToken)
  public async FindFavoEvent(
    @Path() id: string,
    @Request() request: any
  ): Promise<any> {
    try {

      console.log("Get Id");
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

  @Get("/host/{orgId}")
  public async FindOrgEvent(@Path() orgId:string):Promise<any>{
    try{
      const events = await eventService.findAllEventByOrgId(orgId);
      return {
        data:events
      }
    }catch(error:unknown){
      throw new APIError("Event Not Found !!", StatusCode.NotFound); 
    }
  }
}
