import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import style from '../reactHookForms/reactHookForms.module.css';
import schema from '../../helpers/validation';
import { setSubmission } from '../../../slices/dataSlice';
import { getPasswordColor, getPasswordStrength } from '../../helpers/helper';
import { RootState } from '../../../app/store';

interface IError {
  [key: string]: string;
}

function UncontrolledForms() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputImage = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputConfirmPassword = useRef<HTMLInputElement>(null);
  const inputGender = useRef<HTMLSelectElement>(null);
  const inputCountry = useRef<HTMLInputElement>(null);
  const inputConditionsFrom = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [strengthIndicator, setStrengthIndicator] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const [suggestedCountry, setSuggestedCountry] = useState<string[]>([]);
  const countries = useSelector((state: RootState) => state.data.countries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = () => {
    const value = inputCountry.current?.value || '';

    if (value) {
      const filteredCountries = countries.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestedCountry(filteredCountries);
    } else {
      setSuggestedCountry([]);
    }
  };

  const handleSuggestionClick = (country: string) => {
    if (inputCountry.current) {
      inputCountry.current.value = country;
    }
    setSuggestedCountry([]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      validName: inputName?.current?.value,
      age: inputAge?.current ? Number(inputAge.current.value) : undefined,
      email: inputEmail?.current?.value,
      image: inputImage?.current?.files,
      password: inputPassword?.current?.value,
      confirmPassword: inputConfirmPassword?.current?.value,
      gender: inputGender?.current?.value,
      country: inputCountry?.current?.value,
      conditionsForm: inputConditionsFrom?.current?.checked,
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
      navigate('/');
      if (formData.image && formData.image.length > 0) {
        const file = formData.image[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = (reader.result as string)
            .replace('data:', '')
            .replace(/^.+,/, '');
          dispatch(
            setSubmission({
              ...formData,
              image: [base64String],
            })
          );
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        const formattedErrors = error.inner.reduce((acc, err) => {
          if (err.path) {
            return {
              ...acc,
              [err.path]: err.message,
            };
          }
          return acc;
        }, {} as IError);
        setErrors(formattedErrors);
      }
      handlePasswordChange();
    }
  };

  return (
    <main>
      <div className={style.hookFormWrapper}>
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
          <label
            htmlFor="confirmPassword"
            className={clsx(style.formElement, style.passwordLabel)}
          >
            Confirm Password:
            <input
              autoComplete="new-password"
              type={showSecondPassword ? 'text' : 'password'}
              id="confirmPassword"
              ref={inputConfirmPassword}
              placeholder="Confirm Password"
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
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <label htmlFor="gender" className={clsx(style.formElement)}>
            Gender:
            <select
              id="gender"
              className={clsx(style.formElementInput)}
              ref={inputGender}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.gender && (
              <span className={clsx(style.errorMessage)}>{errors.gender}</span>
            )}
          </div>

          <label htmlFor="country" className={clsx(style.formElement)}>
            Country:
            <div className={clsx(style.inputBox)}>
              <input
                className={clsx(style.formElementInput, style.countryInput)}
                id="country"
                type="text"
                ref={inputCountry}
                onChange={handleInputChange}
                placeholder="Search for a country..."
              />
              {suggestedCountry.length > 0 && (
                <div className={clsx(style.dropBox)}>
                  {suggestedCountry.map((country) => (
                    <div
                      key={country}
                      className="autocomplete-item"
                      onClick={() => handleSuggestionClick(country)}
                      role="option"
                      aria-selected={inputCountry.current?.value === country}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleSuggestionClick(country);
                        }
                      }}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.country && (
              <span className={clsx(style.errorMessage)}>{errors.country}</span>
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
          <label htmlFor="conditions" className={clsx(style.formElement)}>
            I accept the Terms and Conditions
            <input
              type="checkbox"
              className={clsx(style.termsInput)}
              id="conditions"
              ref={inputConditionsFrom}
            />
          </label>
          <div className={clsx(style.errorBox)}>
            {errors.conditionsForm && (
              <span className={clsx(style.errorMessage)}>
                {errors.conditionsForm}
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

export default UncontrolledForms;
