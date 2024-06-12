import { QueryParams } from "@event/controllers/event.controller";
import { EventDetail } from "@event/databases/@types/event.interface";
import { EventRepository } from "@event/databases/repositories/event.reposities";
import APIError from "@event/Errors/api-error";
import { StatusCode } from "@event/utils/consts";


export class EventService {
  public eventRepo: EventRepository;
  constructor() {
    this.eventRepo = new EventRepository();
  }

  async createEvent(eventDetail: EventDetail) {
    try {
      return await this.eventRepo.createEvent(eventDetail);
    } catch (error: unknown) {
      throw new Error("error from service");
    }
  }

  async updateEvent(id: string, eventDetail: EventDetail) {
    try {
      const existedEvent = await this.eventRepo.findEvent(id);

      if (!existedEvent) {
        throw new APIError("Event not found", StatusCode.NotFound);
      }

      return await this.eventRepo.updateEvent(id, eventDetail);
    } catch (error: unknown) {
      throw error;
    }
  }

  async deleteEvent(id: string) {
    try {
      const existedEvent = await this.eventRepo.findEvent(id);

      if (!existedEvent) {
        throw new APIError("Event not found", StatusCode.NotFound);
      }

      return await this.eventRepo.deleteEvent(id);
    } catch (error: unknown) {
      throw error;
    }
  }

  async findEventById(id: string) {
    try {
      return await this.eventRepo.findEvent(id);
    } catch (error: unknown) {
      throw error;
    }
  }


  async findEventByOrgId(id: string){
    try{
      return await this.eventRepo.findEventByOrgId(id)
    }catch(error: unknown){
      throw error
    }
  }

  //search event by name
  async findEventByQueries(queryParams: QueryParams){
    try{
      return await this.eventRepo.findEventByQueries(queryParams)
    }catch(error:unknown){
      throw error
    }
  }

  async findAllEvent(){
    try{
      return await this.eventRepo.findAllEvent()
    }catch(error: unknown){
      throw error
    }
  }

}
