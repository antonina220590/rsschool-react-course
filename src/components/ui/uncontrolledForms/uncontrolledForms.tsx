/* eslint-disable no-param-reassign */
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { ValidationError } from 'yup';
import { useDispatch } from 'react-redux';
import styles from './uncontrolledForm.module.css';
import style from '../reactHookForms/reactHookForms.module.css';
import schema from '../../helpers/validation';
import { setSubmission } from '../../../slices/dataSlice';
import { getPasswordColor, getPasswordStrength } from '../../helpers/helper';

interface ErrorMap {
  [key: string]: string;
}

function UncontrolledForms() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputImage = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [strengthIndicator, setStrengthIndicator] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      validName: inputName?.current?.value,
      age: inputAge?.current ? Number(inputAge.current.value) : undefined,
      email: inputEmail?.current?.value,
      image: inputImage?.current?.files,
      password: inputPassword?.current?.value,
    };

    const handlePasswordChange = () => {
      const password = inputPassword.current?.value || '';
      const strength = getPasswordStrength(password);
      setPasswordStrength(strength);
      setStrengthIndicator(password.length > 0);
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      handlePasswordChange();
      if (formData.image && formData.image.length > 0) {
        const file = formData.image[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = (reader.result as string)
            .replace('data:', '')
            .replace(/^.+,/, '');
          dispatch(
            setSubmission({
              validName: formData.validName,
              age: formData.age,
              image: [base64String],
              password: formData.password,
            })
          );
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        const formattedErrors = error.inner.reduce((acc, err) => {
          if (err.path) {
            acc[err.path] = err.message;
          }
          return acc;
        }, {} as ErrorMap);
        setErrors(formattedErrors);
      }
      handlePasswordChange();
    }
  };

  return (
    <main>
      <div className={styles.hookFormWrapper}>
        <form className={clsx(style.form)} onSubmit={handleSubmit}>
          <label htmlFor="name" className={clsx(style.formElement)}>
            Your Name:
            <input
              type="text"
              ref={inputName}
              id="name"
              placeholder="Name..."
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.validName && (
              <span className={clsx(style.errorMessage)}>
                {errors.validName}
              </span>
            )}
          </div>
          <label htmlFor="age" className={clsx(style.formElement)}>
            Your Name:
            <input
              type="number"
              id="age"
              ref={inputAge}
              placeholder="Age..."
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.age && (
              <span className={clsx(style.errorMessage)}>{errors.age}</span>
            )}
          </div>
          <label htmlFor="email" className={clsx(style.formElement)}>
            Email:
            <input
              type="text"
              id="email"
              ref={inputEmail}
              placeholder="user@example.com"
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.email && (
              <span className={clsx(style.errorMessage)}>{errors.email}</span>
            )}
          </div>
          <label
            htmlFor="password"
            className={clsx(style.formElement, style.passwordLabel)}
          >
            Password:
            <input
              autoComplete="new-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              ref={inputPassword}
              className={clsx(style.formElementInput)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={clsx(style.passwordBtn)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.password && (
              <span className={clsx(style.errorMessage)}>
                {errors.password}
              </span>
            )}
          </div>
          <div className={clsx(style.strengthIndicator)}>
            {strengthIndicator && (
              <>
                <p className={clsx(style.strengthTitle)}>Password Strength</p>
                <div className={clsx(style.strengthBox)}>
                  <div
                    className={clsx(style.strengthLine)}
                    style={{
                      width: `${(passwordStrength / 4) * 100}%`,
                      backgroundColor: getPasswordColor(passwordStrength),
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <label htmlFor="image" className={clsx(style.formElement)}>
            Upload Image:
            <input
              className={clsx(style.fileInput)}
              type="file"
              id="image"
              accept=".png, .jpeg"
              ref={inputImage}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.image && (
              <span className={clsx(style.errorMessage)}>{errors.image}</span>
            )}
          </div>
          <button type="submit" className={clsx(style.submitButton)}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default UncontrolledForms;
