/* eslint-disable react/display-name */
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const inputGroupStyles = {
  div: "w-full  px-3 mb-4 ",
  label: "block uppercase tracking-wide text-gray-700 text-xs font-bold py-2",
  input:
    "appearance-none block w-full bg-gray-100 text-gray-700  focus:border  focus:border-grey-500 rounded p-5 mb-3 leading-tight focus:outline-none focus:bg-white",
  errorParagraf: "text-red-500 text-xs italic",
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    ref={ref}
    {...props}
    onChange={(e) => {
      if (e.target.id === "phone") {
        e.target.value =
          e.target.value
            .replace(/\s/g, "")
            .match(/.{1,3}/g)
            ?.join(" ")
            .substr(0, 11) || "";
        console.log(e.target.value);
      }
    }}
  />
));

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <div className='inline-block relative w-full'>
      <select
        className='block appearance-none w-full
        bg-gray-100   hover:border-white
          px-5 py-5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        ref={ref}
        {...props}
      >
        {options.map(({ label, value }, index) => (
          <option className='' key={index} value={value}>
            <div className='pb-10'>{label}</div>
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  )
);

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  status: string;
  message: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const addMessage = () => {
      const response = axios.post(
        `https://sheltered-river-97651.herokuapp.com/api/forms`,
        {
          data,
        }
      );
      return response;
    };
    async function postMessage() {
      try {
        const res = await addMessage();
        console.log(res.data);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        alert(message);
      }
    }

    postMessage();
    reset();
  };

  return (
    <div className='bg-white my-5 p-4'>
      <div className='text-3xl text-center font-bold pb-5'>
        Formularz kontaktowy
      </div>
      <form id='myform' onSubmit={handleSubmit(onSubmit)}>
        <div className='lg:flex'>
          <div className={inputGroupStyles.div}>
            <label className={inputGroupStyles.label} htmlFor='name'>
              Imi?? i Nazwisko
            </label>
            <Input
              placeholder='Imi?? i Nazwisko'
              className={inputGroupStyles.input}
              id='name'
              type='text'
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className={inputGroupStyles.errorParagraf}>
                Please fill out this field.
              </p>
            )}
          </div>

          <div className={inputGroupStyles.div}>
            <label className={inputGroupStyles.label} htmlFor='email'>
              Email
            </label>
            <Input
              placeholder='Email'
              className={inputGroupStyles.input}
              id='email'
              type='text'
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className={inputGroupStyles.errorParagraf}>
                Prosz?? wype??ni?? to pole
              </p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className={inputGroupStyles.errorParagraf}>
                Prosz?? poda?? prawid??owy adres email
              </p>
            )}
          </div>
        </div>
        <div className={inputGroupStyles.div}>
          <label className={inputGroupStyles.label} htmlFor='phone'>
            Telefon kontaktowy
          </label>
          <Input
            placeholder='Telefon'
            className={inputGroupStyles.input}
            id='phone'
            type='tel'
            {...register("phone", { required: true, minLength: 11 })}
          />

          {errors?.phone?.type === "minLength" && (
            <p className={inputGroupStyles.errorParagraf}>
              Prosz?? wpisa?? poprawny numer telefonu
            </p>
          )}
          {errors?.phone?.type === "required" && (
            <p className={inputGroupStyles.errorParagraf}>
              Prosz?? poda?? numer telefonu
            </p>
          )}
        </div>

        {/* <div className={inputGroupStyles.div}>
          <label className={inputGroupStyles.label} htmlFor='status'>
            Status
          </label>
          <Select
            {...register("status")}
            options={[
              { label: "Jeste?? klientem?", value: "unknown" },
              {
                label: "Tak, jestem nowym potencjalnym klientem.",
                value: "new",
              },
              { label: "Tak, jestem obecnym klientem.", value: "current" },
              { label: "Nie jestem klientem", value: "neither" },
            ]}
          />
        </div> */}

        <div className={inputGroupStyles.div}>
          <label className={inputGroupStyles.label} htmlFor='message'>
            Wiadomo????
          </label>
          <textarea
            placeholder='Wiadomo????'
            className='w-full h-36 appearance-none block bg-gray-100 focus:bg-white  text-gray-700 border border-grey-100 rounded py-5 px-5  leading-tight focus:outline-none '
            id='message'
            {...register("message", { required: true })}
          />
          {errors?.message?.type === "required" && (
            <p className={inputGroupStyles.errorParagraf}>
              Prosz?? wype??ni?? to pole
            </p>
          )}
        </div>
        <div className={`${inputGroupStyles.div}`}>
          <div className='flex justify-end items-center'>
            <input
              className='cursor-pointer border border-blue-700 text-blue-700 bg-white hover:text-white hover:bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 uppercase'
              type='submit'
              value='wy??lij'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
