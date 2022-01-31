import React, { useContext, useState } from 'react'
import { Formik, Form, useField, Field } from 'formik'
import * as Yup from 'yup'
import SiteContext from '@context/siteContext'
import { ToastContainer, toast } from 'react-toastify'

// And now we can use these
export const SignupForm = () => {
  const { klaviyo } = useContext(SiteContext)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          notes: '',
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          !submitted &&
            toast(
              'Thanks for your interest! Check your inbox for more details.',
            )

          klaviyo.learnq.push([
            'identify',
            {
              $email: values.email,
              $first_name: values.firstName,
              $last_name: values.lastName,
              $consent: ['email', 'web'],
              signupOrigin: 'Contact Form',
              notes: values.notes,
            },
          ])
          klaviyo.learnq.push(['track', 'Contact Form Submitted'])

          setSubmitted(true)
          setSubmitting(false)
        }}
      >
        <Form className="Form flex flex-col w-full max-w-4xl p-4 gap-4">
          <fieldset className="nameGroup flex flex-col md:flex-row gap-8">
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />

            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
          </fieldset>

          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <LargeTextInput
            label="Notes"
            name="notes"
            type="text"
            placeholder="Anything in particular you'd like to discuss? (optional)"
          />

          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <button
            type="submit"
            className="btn btn-primary p-4 bg-brightOrange flex w-full align-center justify-center font-bold uppercase font-sans text-2xl self-end"
          >
            Get In Touch
          </button>
        </Form>
      </Formik>
      <p className="text-sm">
        By clicking the button, I agree with the collection and processing of my
        personal data as described in the Privacy Policy.
      </p>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  )
}

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={props.id || props.name}
        className="text-sm uppercase text-faintGrey font-sans"
      >
        {label}
      </label>
      <input className="text-input p-6 bg-cardGrey" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-sm uppercase font-sans text-brightOrange">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

const LargeTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={props.id || props.name}
        className="text-sm uppercase text-faintGrey font-sans"
      >
        {label}
      </label>
      <input className="text-input p-6 bg-cardGrey" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-sm uppercase font-sans text-brightOrange">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

const Checkbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} className="p-4" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-sm uppercase font-sans text-brightOrange">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}
