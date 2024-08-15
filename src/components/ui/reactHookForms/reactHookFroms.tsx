// import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import style from './reactHookForms.module.css';

function ReactHooksForms() {
  // const {
  //   register,
  //   handlesubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  //   getValues,
  // } = useForm();

  return (
    <main>
      <div className={style.hookFormWrapper}>
        <form className={clsx(style.form)}>
          <label htmlFor="userName" className={clsx(style.formElement)}>
            Your Name:
            <input
              type="text"
              name="userName"
              placeholder="Name..."
              className={clsx(style.formElementInput)}
            />
          </label>
          <label htmlFor="age" className={clsx(style.formElement)}>
            Your Age:
            <input
              type="number"
              name="age"
              placeholder="Age..."
              className={clsx(style.formElementInput)}
            />
          </label>
          <label htmlFor="email" className={clsx(style.formElement)}>
            Email:
            <input
              type="email"
              name="email"
              placeholder="user@example.com"
              className={clsx(style.formElementInput)}
            />
          </label>
          <label htmlFor="name" className={clsx(style.formElement)}>
            Your Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={clsx(style.formElementInput)}
            />
          </label>
          <label htmlFor="gender" className={clsx(style.formElement)}>
            Category:
            <select name="gender" className={clsx(style.formElementInput)}>
              <option value="">Select...</option>
              <option value="technology">Male</option>
              <option value="health">Female</option>
            </select>
          </label>
          <label htmlFor="file" className={clsx(style.formElement)}>
            <input type="file" name="file" accept=".png, .jpeg, .jpg" />

            <button type="submit" className={clsx(style.imgButton)}>
              Upload
            </button>
          </label>
          <label htmlFor="terms" className={clsx(style.formElement)}>
            I agree to the Terms and Conditions
            <input
              type="checkbox"
              className={clsx(style.termsInput)}
              name="terms"
            />
          </label>
          <button type="submit" className={clsx(style.submitButton)}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default ReactHooksForms;
