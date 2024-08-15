import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import clsx from 'clsx';
import style from './reactHookForms.module.css';

function ReactHooksForms() {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthIndicator, setStrengthIndicator] = useState(false);

  const schema = Yup.object().shape({
    validName: Yup.string()
      .matches(/^[A-Z][a-zA-Z]*$/, 'Name must start with an uppercase letter')
      .required('Name is required'),
    age: Yup.number()
      .typeError('Age must be a number')
      .min(1, 'Age must be a non-negative number')
      .required('Age is required'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Email is not valid'
      )
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required.')
      .matches(/(?=.*[0-9])/, 'Password must contain at least 1 number.')
      .matches(
        /(?=.*[a-z])/,
        'Password must contain at least 1 lowercase letter.'
      )
      .matches(
        /(?=.*[A-Z])/,
        'Password must contain at least 1 uppercase letter.'
      )
      .matches(
        /(?=.*[!@#$%^&*])/,
        'Password must contain at least 1 special character.'
      ),
    confirmPassword: Yup.string()
      .required('Please confirm your password.')
      .oneOf([Yup.ref('password'), ''], 'Passwords must match.'),
  });

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: FieldValues) => {
  // console.log('Form Data:', data);
  // onSubmit={handleSubmit(onSubmit)};
  // };

  const getPasswordStrength = (password: string) => {
    if (!password) return 0;
    let strength = 0;
    if (/(?=.*[0-9])/.test(password)) strength += 1;
    if (/(?=.*[a-z])/.test(password)) strength += 1;
    if (/(?=.*[A-Z])/.test(password)) strength += 1;
    if (/(?=.*[!@#$%^&*])/.test(password)) strength += 1;
    return strength;
  };

  const getPasswordColor = (strength: number) => {
    if (strength === 0 || !strength) return 'red';
    if (strength === 1) return 'orange';
    if (strength === 2) return 'yellow';
    if (strength === 3) return 'lightgreen';
    return 'green';
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const strength = getPasswordStrength(password);
    setPasswordStrength(strength);
    setStrengthIndicator(password.length > 0);
  };

  return (
    <main>
      <div className={style.hookFormWrapper}>
        <form className={clsx(style.form)}>
          <label htmlFor="name" className={clsx(style.formElement)}>
            Your Name:
            <input
              type="text"
              id="name"
              placeholder="Name..."
              {...register('validName')}
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.validName && (
              <span className={clsx(style.errorMessage)}>
                {errors.validName.message}
              </span>
            )}
          </div>

          <label htmlFor="age" className={clsx(style.formElement)}>
            Your Age:
            <input
              type="number"
              placeholder="Age..."
              {...register('age')}
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.age && (
              <span className={clsx(style.errorMessage)}>
                {errors.age.message}
              </span>
            )}
          </div>
          <label htmlFor="email" className={clsx(style.formElement)}>
            Email:
            <input
              type="email"
              id="email"
              placeholder="user@example.com"
              {...register('email')}
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.email && (
              <span className={clsx(style.errorMessage)}>
                {errors.email.message}
              </span>
            )}
          </div>
          <label htmlFor="password" className={clsx(style.formElement)}>
            Password:
            <input
              type="password"
              placeholder="Password"
              {...register('password', { onChange: handlePasswordChange })}
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.password && (
              <span className={clsx(style.errorMessage)}>
                {errors.password.message}
              </span>
            )}
          </div>
          <div className={clsx(style.strengthIndicator)}>
            {strengthIndicator && (
              <>
                <p className={clsx(style.strengthTitle)}>Password Strength</p>
                <div className={clsx(style.strengthBox)}>
                  <div
                    style={{
                      height: '100%',
                      transition: 'width 0.3s ease-in-out',
                      width: `${(passwordStrength / 4) * 100}%`,
                      backgroundColor: getPasswordColor(passwordStrength),
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <label htmlFor="confirmPassword" className={clsx(style.formElement)}>
            Confirm Password:
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
              className={clsx(style.formElementInput)}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.confirmPassword && (
              <span className={clsx(style.errorMessage)}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

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
