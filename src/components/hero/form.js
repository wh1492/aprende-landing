import { Link } from "react-router-dom";
import { Field, Form, Formik, FormikProps } from 'formik';
import './hero.scss'

const FormHero = () => {
  return (
    <div className='aprende-hero--form'>

      <h3>Lorem ipsum dolor</h3>
      <p>TextP1 Lorem ipsum dolor consectetur adipiscing elit platea rhoncus</p>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          country: '',
          phone: '',
          interest: '',
          ocupation: '',
          checkCom: false
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
              placeholder="Nombre*"
            />
            <Field
              type="text"
              name="lastname"
              value={values.lastname}
              placeholder="Apellido*"
            />
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Correo electrónico*"
            />
            {errors.email && touched.email && errors.email}
            <div className='phoneComponent'>
              <Field as="select" name="country">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <Field
                type="phone"
                name="phone"
                placeholder="Teléfono*"
              />
            </div>
            <Field as="select" name="interest">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field as="select" name="ocupation">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>

            <label className='form-disclaimer'>
              <Field type="checkbox" name="checkCom" />
              Recibe mensajes via WhatsApp y Sms sobre nuestros diplomados
            </label>

            <button type="submit" disabled={isSubmitting}>
              Lorem ipsum
            </button>

            <p className='form-disclaimer'>
              Al compartir tu datos, aceptas nuestros <Link to="/"> Términos de servicio y Política de privacidad</Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default FormHero