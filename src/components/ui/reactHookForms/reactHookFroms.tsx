import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import clsx from 'clsx';
import style from './reactHookForms.module.css';
import { getPasswordColor, getPasswordStrength } from '../../helpers/helper';
import schema from '../../helpers/validation';
import { setImage } from '../../../slices/imageSlice';
import {
  setAge,
  setEmail,
  setGender,
  setName,
  setPassword,
  setSelectedCountry,
  setConditions,
} from '../../../slices/dataSlice';

export interface DataState {
  data: {
    age: number[];
    name: string[];
    countries: { label: string; value: string }[];
    selectedCountry: string[];
    email: string[];
    password: string[];
    gender: string[];
    conditions: boolean[];
  };
}

function ReactHooksForms() {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthIndicator, setStrengthIndicator] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const countries = useSelector((state: DataState) => state.data.countries);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    const file = data.image[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string)
          .replace('data:', '')
          .replace(/^.+,/, '');
        dispatch(setImage({ image: base64String }));
      };
      reader.readAsDataURL(file);
    }
    dispatch(setSelectedCountry(data.country));
    dispatch(setName(data.validName));
    dispatch(setAge(data.age));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    dispatch(setGender(data.gender));
    dispatch(setConditions(data.conditionsForm));
    navigate('/');
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
        <form className={clsx(style.form)} onSubmit={handleSubmit(onSubmit)}>
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
              id="age"
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
          <label
            htmlFor="password"
            className={clsx(style.formElement, style.passwordLabel)}
          >
            Password:
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', { onChange: handlePasswordChange })}
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

          <label
            htmlFor="confirmPassword"
            className={clsx(style.formElement, style.passwordLabel)}
          >
            Confirm Password:
            <input
              type={showSecondPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
              className={clsx(style.formElementInput)}
            />
            <button
              type="button"
              onClick={() => setShowSecondPassword((prev) => !prev)}
              className={clsx(style.passwordBtn)}
            >
              {showSecondPassword ? 'Hide' : 'Show'}
            </button>
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.confirmPassword && (
              <span className={clsx(style.errorMessage)}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <label htmlFor="gender" className={clsx(style.formElement)}>
            Gender:
            <select
              id="gender"
              className={clsx(style.formElementInput)}
              {...register('gender')}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.gender && (
              <span className={clsx(style.errorMessage)}>
                {errors.gender.message}
              </span>
            )}
          </div>
          <label htmlFor="country" className={clsx(style.formElement)}>
            Select Country:
            <select
              id="country"
              {...register('country')}
              className={clsx(style.formElementInput)}
            >
              <option value="">Select a country...</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </label>
          {errors.country && (
            <span style={{ color: 'red' }}>{errors.country.message}</span>
          )}
          <label htmlFor="image" className={clsx(style.formElement)}>
            <input
              className={clsx(style.fileInput)}
              type="file"
              id="image"
              accept=".png, .jpeg"
              {...register('image')}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.image && (
              <span className={clsx(style.errorMessage)}>
                {errors.image.message}
              </span>
            )}
          </div>
          <label htmlFor="conditions" className={clsx(style.formElement)}>
            I accept the Terms and Conditions
            <input
              type="checkbox"
              className={clsx(style.termsInput)}
              id="conditions"
              {...register('conditionsForm')}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.conditionsForm && (
              <span className={clsx(style.errorMessage)}>
                {errors.conditionsForm.message}
              </span>
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

export default ReactHooksForms;
