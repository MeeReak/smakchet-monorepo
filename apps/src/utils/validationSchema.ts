import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Please Provide Name").min(3),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phonenumber: Yup.string().required("Phone number is required"),
});
