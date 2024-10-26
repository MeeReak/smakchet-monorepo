import * as Yup from "yup";

 export const eventValidationSchema = Yup.object().shape({
  eventName: Yup.string().required("Event name is required"),
  thumbnail: Yup.string().required("Image is required"),
  category : Yup.string().required("Category is required"),
  description: Yup.string().required("Detail is required"),
  Date: Yup.object().shape({
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string().required("End date is required"),
    startTime: Yup.string().required("Start time is required"),
    endTime: Yup.string().required("End time is required")
  }),
  location: Yup.string().required("Location is required"),
  requirement:Yup.object().shape({
    age: Yup.string().required("Age is required"),
    language: Yup.string().required("Language is required"),
    skill: Yup.string().required("Skill is required"),
    timeCommitment: Yup.string().required("Time commitment is required")
  }),
  address: Yup.object().shape({
    lat:Yup.string().required("Lat is required"),
    lng:Yup.string().required("Lng is required")
  })
});
