import { QueryParams } from "@event/controllers/event.controller";
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

  async findEventByQueries(queryParams: QueryParams): Promise<any> {
    try {
      const { name, cate, id, limit, page } = queryParams;

      // Build the query object dynamically based on provided parameters
      const query: { [key: string]: any } = {}; // Use a generic object type for Mongoose query
      if (name) query.eventName = name;
      if (cate) query.category = cate;
      if (id) query._id = id;

      const Page = parseInt(page);
      const sizePage = parseInt(limit);
      const startIndex = (Page - 1) * sizePage;
      const endIndex = Page * sizePage;

      console.log(startIndex, endIndex);

      const event = await EventModel.find(query ? query : {});

      const paginatedProducts = event.slice(startIndex, endIndex);

      return paginatedProducts;
    } catch (error: unknown) {
      throw error; // Or handle the error more gracefully
    }
  }

  async findAllEvent() {
    try {
      return await EventModel.find();
    } catch (error: unknown) {
      throw error;
    }
  }
}
