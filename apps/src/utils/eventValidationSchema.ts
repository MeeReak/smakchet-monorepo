import * as Yup from "yup";

 export const eventValidationSchema = Yup.object().shape({
   name: Yup.string().required("Event name is required"),
   imageSrc:Yup.string().required("Image is required"),
  category: Yup.string().required("Category is required"),
  detail: Yup.string().required("Detail is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date can't be before start date"),
  startTime: Yup.string().required("Start time is required"),
  endTime: Yup.string().required("End time is required"),
  location: Yup.string().required("Location is required"),
  age: Yup.string().required("Age is required"),
  language: Yup.string().required("Language is required"),
  skill: Yup.string().required("Skill is required"),
  timeCommitment: Yup.string().required("Time commitment is required"),
});
