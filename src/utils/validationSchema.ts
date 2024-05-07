import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Please fill this"),
  password: yup.string().required("Please fill this"),
});
