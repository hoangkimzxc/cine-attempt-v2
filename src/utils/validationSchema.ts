import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Pls fill"),
  password: yup.string().required("Pls fill"),
});
