import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    orgId: {
      type: mongoose.Types.ObjectId,
    },
    thumbnail: {
      type: String,
    },
    eventName: {
      type: String,
    },
    location:{
      type: String
    },
    address: {
      lat: String,
      lng: String,
    },
    category: {
      type: String,
      enum: ["Sport", "Education", "Workshop", "Charity"],
    },
    viewer: {
      type: Number,
    },
    description: {
      type: String,
    },
    Date: {
      startDate: String,
      endDate: String,
      startTime: String,
      endTime: String,
    },
    requirement: {
      age: String,
      language: String,
      skill: String,
      timeCommitment: String,
    },
    createdAt: { type: Date, default: Date.now() },
    formSubmission: [
      {
        id  : mongoose.Types.ObjectId,
        label: String,
        fieldType: String,
        answers: mongoose.Schema.Types.Mixed, // Array to store multiple answers
      },
    ],
  },
  {
    toJSON: {
      transform(_doc, ret) {
        delete ret.__v;
      },
    },
  }
);
const EventModel = mongoose.model("Event", eventSchema);

export default EventModel;
