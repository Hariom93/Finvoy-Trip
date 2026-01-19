import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./hotel-form.module.css";
import BackButton from "../BackButton";

const validationSchema = Yup.object({
  from: Yup.string().required("From required"),
  to: Yup.string().required("To required"),
  checkin: Yup.date().required("O. Date required"),
  checkout: Yup.date()
    .required("R. Date required")
    .min(Yup.ref("checkin"), "Return must be after departure"),
  adults: Yup.number().min(1).required(),
  children: Yup.number().min(0).required(),
  name: Yup.string().min(3).required("Name required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid number")
    .required("Contact required"),
});

const FlightForm = () => {
const sendMail = (values) => {
  const toEmail = "info@finvoyglobal.co";
  const subject = "New Booking Enquiry";

  const body = `
From: ${values.from}
To: ${values.to}
Departure: ${values.checkin}
Return: ${values.checkout}
Adults: ${values.adults}
Children: ${values.children}
Name: ${values.name}
Contact: ${values.contact}
  `;

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    toEmail
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, "_blank");
};


  return (
    <div className={styles.wrapper}>
      <BackButton />
      <h2 className={styles.header}>Booking Information</h2>

      <Formik
        initialValues={{
          from: "",
          to: "",
          checkin: "",
          checkout: "",
          adults: 1,
          children: 0,
          name: "",
          contact: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          sendMail(values);
        }}
      >
        <Form className={styles.form}>
          <h4>Location</h4>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>From</label>
              <Field name="from" placeholder="From" />
              <ErrorMessage name="from" component="span" />
            </div>

            <div className={styles.inputGroup}>
              <label>To</label>
              <Field name="to" placeholder="To" />
              <ErrorMessage name="to" component="span" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>O. Date</label>
              <Field type="date" name="checkin" />
            </div>

            <div className={styles.inputGroup}>
              <label>R. Date</label>
              <Field type="date" name="checkout" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Adults</label>
              <Field type="number" name="adults" />
            </div>

            <div className={styles.inputGroup}>
              <label>Children</label>
              <Field type="number" name="children" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Name</label>
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={styles.inputGroup}>
            <label>Contact</label>
            <Field name="contact" />
            <ErrorMessage name="contact" component="span" />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FlightForm;
