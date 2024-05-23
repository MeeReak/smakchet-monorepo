import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3).max(8),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phonenumber: Yup.string().required("Phone number is required"),
  reason: Yup.string().required("reason is required"),
  joinbefore: Yup.string().required("Have you joined before?")
});
