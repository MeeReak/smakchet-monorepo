import { QueryParams } from "@event/controllers/event.controller";
import { EventDetail } from "../@types/event.interface";
import EventModel from "../models/event.model";

export class EventRepository {
  async createEvent(eventDetail: EventDetail) {
    try {
      return await EventModel.create(eventDetail);
    } catch (error: unknown) {
      throw new Error("error from repo");
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

  async findallorgEvent(id:string){
    try {
      return await EventModel.find({ orgId: id });
    } catch (error: unknown) {
      throw error;
    } 
  }

  async findEventByQueries(queryParams: QueryParams): Promise<any> {
    try {
      const { name, cate, id, limit, page, date, location } = queryParams;

      // Build the query object dynamically based on provided parameters
      const query: { [key: string]: any } = {}; // Use a generic object type for Mongoose query
      if (name) query.eventName = { $regex: name, $options: "i" }; // Case-insensitive partial match
      if (cate) query.category = cate;
      if (id) query._id = id;
      if (location) query.location = location;
      if (date) query.Date.startDate = date;
      

      console.log(page, limit);
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

  async findEventByView() {
    try {
      return await EventModel.find().sort({ viewer: -1 }).limit(2);
    } catch (error: unknown) {
      throw error;
    }
  }

  async updateView(id: string) {
    try {
      return await EventModel.findByIdAndUpdate(
        id,
        { $inc: { viewer: 1 } },
        { new: true }
      );
    } catch (error: unknown) {
      throw error;
    }
  }
}
