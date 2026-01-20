import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./hotel-form.module.css";
import BackButton from "../BackButton";

// ================= VALIDATION =================
const validationSchema = Yup.object({
  from: Yup.string().required("From required"),
  to: Yup.string().required("To required"),
  checkin: Yup.date().required("O. Date required"),
  checkout: Yup.date()
    .required("R. Date required")
    .min(Yup.ref("checkin"), "Return must be after departure"),
  adults: Yup.number().min(1, "At least 1 adult").required(),
  children: Yup.number().min(0).required(),
  name: Yup.string().min(3, "Min 3 characters").required("Name required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
    .required("Contact required"),
});

const FlightForm = () => {

  // ✅ FORCE PAGE TO OPEN FROM TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // ================= GMAIL COMPOSE =================
  const sendMail = (values) => {
    const toEmail = "info@finvoyglobal.co";
    const subject = "New Flight Booking Enquiry";

    const body = `
Flight Booking Enquiry

From: ${values.from}
To: ${values.to}

Departure Date: ${values.checkin}
Return Date: ${values.checkout}

Adults: ${values.adults}
Children: ${values.children}

Name: ${values.name}
Contact: ${values.contact}
    `;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      toEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank", "noopener,noreferrer");
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
        onSubmit={(values, { resetForm }) => {
          sendMail(values);   // 📧 Gmail opens
          resetForm();        // 🔄 Clear form
        }}
      >
        <Form className={styles.form}>
          {/* LOCATION */}
          <h4>Location</h4>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>From</label>
              <Field name="from" placeholder="From city" />
              <ErrorMessage name="from" component="span" />
            </div>

            <div className={styles.inputGroup}>
              <label>To</label>
              <Field name="to" placeholder="To city" />
              <ErrorMessage name="to" component="span" />
            </div>
          </div>

          {/* DATES */}
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>O. Date</label>
              <Field type="date" name="checkin" />
              <ErrorMessage name="checkin" component="span" />
            </div>

            <div className={styles.inputGroup}>
              <label>R. Date</label>
              <Field type="date" name="checkout" />
              <ErrorMessage name="checkout" component="span" />
            </div>
          </div>

          {/* GUESTS */}
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

          {/* NAME */}
          <div className={styles.inputGroup}>
            <label>Name</label>
            <Field name="name" placeholder="Full Name" />
            <ErrorMessage name="name" component="span" />
          </div>

          {/* CONTACT */}
          <div className={styles.inputGroup}>
            <label>Contact</label>
            <Field name="contact" placeholder="Mobile Number" />
            <ErrorMessage name="contact" component="span" />
          </div>

          {/* SUBMIT */}
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FlightForm;
