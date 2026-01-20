import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./hotel-form.module.css";
import BackButton from "../BackButton";

// ✅ Validation schema (MATCHES form fields)
const validationSchema = Yup.object({
  location: Yup.string().required("Location is required"),
  checkin: Yup.date().required("Check-in required"),
  checkout: Yup.date()
    .required("Check-out required")
    .min(Yup.ref("checkin"), "Checkout must be after check-in"),
  adults: Yup.number().min(1, "At least 1 adult").required(),
  children: Yup.number().min(0).required(),
  name: Yup.string().min(3).required("Name required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit number")
    .required("Contact required"),
});

const HotelForm = () => {

  // ✅ FORCE PAGE TO OPEN FROM TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // ✅ Gmail compose logic
  const sendMail = (values) => {
    const toEmail = "info@finvoyglobal.co";
    const subject = "New Hotel Booking Enquiry";

    const body = `
Hotel Booking Enquiry

Location: ${values.location}

Check-in: ${values.checkin}
Check-out: ${values.checkout}

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
          location: "",
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
          {/* Location */}
          <div className={styles.inputGroup}>
            <label>Location</label>
            <Field name="location" placeholder="City / Hotel" />
            <ErrorMessage name="location" component="span" />
          </div>

          {/* Dates */}
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Check-in</label>
              <Field type="date" name="checkin" />
              <ErrorMessage name="checkin" component="span" />
            </div>

            <div className={styles.inputGroup}>
              <label>Check-out</label>
              <Field type="date" name="checkout" />
              <ErrorMessage name="checkout" component="span" />
            </div>
          </div>

          {/* Guests */}
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

          {/* Name */}
          <div className={styles.inputGroup}>
            <label>Name</label>
            <Field name="name" placeholder="Full Name" />
            <ErrorMessage name="name" component="span" />
          </div>

          {/* Contact */}
          <div className={styles.inputGroup}>
            <label>Contact</label>
            <Field name="contact" placeholder="Mobile Number" />
            <ErrorMessage name="contact" component="span" />
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default HotelForm;
