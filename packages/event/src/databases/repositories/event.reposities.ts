import { EventDetail } from "../@types/event.interface";
import EventModel from "../models/event.model";

export class EventRepository {
  async createEvent(eventDetail: EventDetail) {
    try {
      return await EventModel.create(eventDetail);
    } catch (error: unknown) {
      throw error;
    }
  }

  async updateEvent(id: string, newDetail: EventDetail) {
    try {
      return await EventModel.findByIdAndUpdate(id, newDetail, { new: true });
    } catch (error: unknown) {
      throw error;
    }
  }

  async deleteEvent(id: string) {
    try {
      return await EventModel.findByIdAndDelete(id);
    } catch (error: unknown) {
      throw error;
    }
  }

  async findEvent(id: string) {
    try {
      return await EventModel.findById(id);
    } catch (error: unknown) {
      throw error;
    }
  }

  async findEventByOrgId(id: string) {
    try {
      return await EventModel.findOne({ orgId: id });
    } catch (error: unknown) {
      throw error;
    }
  }

  async findEventByCate(cate: string) {
    try {
      return await EventModel.findOne({ category: cate });
    } catch (error: unknown) {
      throw error;
    }
  }

  async findEventByName(name: string) {
    try {
      return await EventModel.findOne({ eventName: name });
    } catch (error: unknown) {
      throw error;
    }
  }

  async findAllUser(){
    try{
      return await EventModel.find()
    }catch(error: unknown){
      throw error
    }
  }
}
