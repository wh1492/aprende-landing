import { Field, Form, Formik, FormikProps } from 'formik';
import './hero.scss'

const FormHero = () => {
  return (
    <div className='aprende-hero-hero'>
      formulario
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          country: '',
          phone: '',
          interest: '',
          ocupation: '',
          checkCom: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="text"
              name="name"
              value={values.name}
            />
            <Field
              type="text"
              name="lastname"
              value={values.lastname}
            />
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div>
              <Field as="select" name="country">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <Field
                type="phone"
                name="phone"
              />
            </div>
            {errors.email && touched.email && errors.email}

            <button type="submit" disabled={isSubmitting}>
              Lorem ipsum
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default FormHero