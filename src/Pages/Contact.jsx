import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const templateParams = {
      to_name: "Bo$$",
      from_name: formData.get('firstName') + ' ' + formData.get('lastName'),
      message: formData.get('message'),
      user_email: formData.get('email'),
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
    emailjs
      .send('service_uxqzd8e', 'template_6hqt0wm', templateParams, '6M5JdRYCf8pmraDLX')
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        formRef.current.reset(); // Reset the form inputs
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error and show an error message
      });
  };

  return (
    <div className="text-white h-screen py-20" id="contact-container">
      <div className="p-6 md:px-10 m-auto h-full grid md:grid-cols-2 flex flex-col gap-8">
        <div className="space-y-5">
          <p className="text-5xl font-bold">Get in touch</p>
          <p className="text-xl py-6 md:w-[90%]">
          Interested in software development services? We would love to hear from you!
          Whether you have a project in mind, need technical consultation, or have any questions regarding our services, our team is ready to assist you. Please fill out the form, and we'll get back to you as soon as possible.  
          </p>
          <div className="flex gap-4">
            <div className="text-white text-2xl">
              <ImLocation2 />
            </div>
            <p>Bucharest, Economu Cezarescu 52 </p>
          </div>
          <div className="flex gap-4">
            <div className="text-white text-2xl">
              <BsTelephoneFill />
            </div>
            <p>Number</p>
          </div>
          <div className="flex gap-4">
            <div className="text-white text-2xl">
              <MdEmail />
            </div>
            <p>email@gmail.com</p>
          </div>
        </div>
        <div className=" " id="contact-form">
          <form onSubmit={handleSubmit} className='space-y-5' ref={formRef}>
            <div className="flex gap-4 ">
              <div className="w-[50%]">
                <label htmlFor="firstName">First Name</label>
                <div>
                  <input className="w-[100%] input-design" type="text" id="firstName" name="firstName" required />
                </div>
              </div>
              <div className="w-[50%]">
                <label htmlFor="lastName">Last Name</label>
                <div>
                  <input className="w-[100%] input-design" type="text" id="lastName" name="lastName" required />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <div className="">
              <input className="w-full input-design" type="email" id="email" name="email" required />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="">
                <input className="w-full input-design" type="tel" id="phoneNumber" name="phoneNumber" required />
              </div>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <div>
                <textarea
                  className="w-[100%] text-black text-xl px-2 rounded-sm"
                  id="message"
                  name="message"
                  cols="2"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="border border-white border-2  p-2 px-6 mb-10" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
