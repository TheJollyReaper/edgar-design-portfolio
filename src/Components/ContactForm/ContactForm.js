import React from 'react'
import './ContactForm.css';
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const { REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID, REACT_APP_USER_ID } = process.env;

function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onErrors = errors => console.error(errors);
    
    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

    const onSubmit = async (data) => {
        try {
          const templateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          };
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
          reset();
          toastifySuccess();
        } catch (e) {
          console.log(e);
        }
      };

    

    return (
        <div>  
            <form className="contact-form" onSubmit={handleSubmit(onSubmit, onErrors)}>
                <h4>Contact me!</h4>
                <div className="row">
                    <div>
                        <input 
                            type="text" 
                            placeholder="name"
                            {...register('name', { required: true, maxLength:30 }
                            )}
                        />
                        {errors.name && errors.name.type === "required" && <span>This is required</span>}
                        {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
                    </div>
                    
                    <div>
                        <input 
                            type="text" 
                            placeholder="email"
                            {...register('email', { required: true }
                            )}
                        />
                        {errors.email && errors.email.type === "required" && <span>This is required</span>}
                    </div>
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder="subject"
                        {...register('subject', { required: true, maxLength: 75 }
                        )}
                    />
                    {errors.subject && errors.subject.type === "required" && <span>This is required</span>}
                    {errors.subject && errors.subject.type === "maxLength" && <span>Max length exceeded</span>}
                </div>

                <div>
                    <textarea
                        className="message"
                        // type="textarea" 
                        placeholder="message"
                        {...register('message', { required: true }
                        )}
                    />
                    {errors.message && errors.message.type === "required" && <span>This is required</span>}
                </div>

                <button type='submit'>
                    Submit
                </button>
            </form>
            
            <ToastContainer />
        </div>
    )
}

export default ContactForm
