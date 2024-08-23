
import { Formik, Form, Field, ErrorMessage } from "formik";
import useLogin from "../hooks/useLogin";
// import Joi from "joi";
import * as Yup from "yup"; // we can use either yup or joi for validation

// const schema = Joi.object({
//   email: Joi.string()
//     .required()
//     .email({ tlds: { allow: ["com"] } }),
//   password: Joi.string().required().min(6),
// });

//we can add custom error msg also
const schema = Yup.object().shape({
  email: Yup.string().required("Email is required")
    .email(),
  // .email({ tlds: { allow: ["com"] } }),
  password: Yup.string().required().min(6),
});

function Login() {
  const login = useLogin();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => login(values)}
      validationSchema={schema}
    >
      <Form>
        <Field name="email" type="email" placeholder="email"></Field>
        <ErrorMessage name="email" />
        <Field name="password" type="password" placeholder="password"></Field>
        <ErrorMessage name="password" />

        <button type="submit"> Login</button>
      </Form>
    </Formik>
  );
}

export default Login;