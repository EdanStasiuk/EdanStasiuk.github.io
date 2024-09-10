import axios from 'axios';
import { useForm } from 'react-hook-form';
import { GoPersonFill } from 'react-icons/go';
import { FiMail } from 'react-icons/fi';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post('http://localhost:3000/contact', data);
      
      console.log("Data: ", response.data);
    } catch (error) {
      
      console.error('There was a problem with the axios operation:', error);
    }
  };

  return (
    <div id='contact' className="text-white">
      <div className="text-[38px] mb-2 roboto-flex-italic-800">Contact</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-robotoFlex font-light text-[18px]"
      >
        <div className="flex -mb-8">
          <div className='w-2/5'>
            <GoPersonFill className="relative left-[18px] top-[23px] scale-[150%] text-formBorderColor" />
          </div>
          <div className='w-3/5'>
            <FiMail className="relative left-[29px] top-[24px] scale-[150%] text-formBorderColor" />
          </div>
        </div>
        <div className="flex">
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-2/5 rounded-xl border border-formBorderColor mt-2 mr-2 py-2 pr-3 pl-[48px] bg-background placeholder-formBorderColor outline-none"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            className="w-3/5 rounded-xl border border-formBorderColor mt-2 ml-2 py-2 pr-3 pl-[50px] bg-background placeholder-formBorderColor outline-none"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <input
          {...register('subject', { required: 'Subject is required' })}
          className="w-full rounded-xl border border-formBorderColor my-2 py-2 px-3 bg-background placeholder-formBorderColor outline-none"
          placeholder="Subject"
        />
        {errors.subject && (
          <p className="text-red-500">{errors.subject.message}</p>
        )}

        <textarea
          {...register('message', { required: 'Message is required' })}
          className="w-full rounded-xl border border-formBorderColor my-2 py-2 px-3 bg-background placeholder-formBorderColor outline-none h-48"
          placeholder="Message"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <button type="submit" className="w-16 text-white mt-4">
          Send
        </button>
      </form>
    </div>
  );
}
