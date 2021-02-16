import { type } from "os";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Login.css";
import * as yup from "yup";
import { Formik } from "formik";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "test@test.fr",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                // isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
              <Button type="submit">Submit form</Button>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                // isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Button type="submit">Submit form</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
}
