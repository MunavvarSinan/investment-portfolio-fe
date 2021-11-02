import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Contact() {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is Required')
      .min(5, 'Name must be minimum of 5 letters '),
    email: Yup.string().required('Email is Required').email('Email is invalid'),
    subject: Yup.string()
      .required('Subject is Required')
      .min(6, 'Subject must be atleast of 6 letters'),
    number: Yup.string()
      .required('Number is required')
      .min(10, 'Invalid Input'),
    message: Yup.string()
      .required('Meaasge is required')
      .min(20, 'message must be more than 20 words'),
  });
  const FormOption = { resolver: yupResolver(validationSchema) };
  const {
    register,
    formState: { errors },
  } = useForm(FormOption);

  function sendEmail(e) {
    emailjs
      .sendForm(
        'service_x8ilhi3',
        'template_u6ochrm',
        e.target,
        'user_i2lLlOqID6yTi04leJGH0'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }
  return (
    <section id="contact" className="contact-section pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xl-5">
            <div className="section-title text-center mb-60">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Get In Touch
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                You can send a mail to us regarding any quries about the
                investment plans or for any support from our team.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="contact-wrapper wow fadeInUp" data-wow-delay=".2s">
              <form
                id="contact-form"
                className="contact-form"
                onSubmit={sendEmail}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        // className="form-input"
                        placeholder="Your Name"
                        {...register('name')}
                        className={`form-input ${
                          errors.name ? 'is-invalid' : ''
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.name?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        // className="form-input"
                        placeholder="Your E-mail"
                        {...register('email')}
                        className={`form-input ${
                          errors.email ? 'is-invalid' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="invalid-feedback">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        // className="form-input"
                        placeholder="Subject"
                        {...register('subject')}
                        className={`form-input ${
                          errors.subject ? 'is-invalid' : ''
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.subject?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        // className="form-input"
                        placeholder="Number"
                        {...register('number')}
                        className={`form-input ${
                          errors.number ? 'is-invalid' : ''
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.number?.message}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-form">
                      <textarea
                        id="message"
                        // className="form-input"
                        rows="7"
                        name="message"
                        placeholder="Message"
                        {...register('message')}
                        className={`form-input ${
                          errors.message ? 'is-invalid' : ''
                        }`}
                      ></textarea>
                      <div className="invalid-feedback">
                        {errors.message?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="submit-btn">
                      <button className="main-btn btn-hover" type="submit" >
                        Submit Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="contact-img wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/images/undraw_message_sent_1030.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
