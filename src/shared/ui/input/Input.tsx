import { FC, InputHTMLAttributes } from 'react';
import './styles.css';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const Input: FC<Props> = ({ id, label, placeholder, required, error, errorMessage, ...props }) => {
  let inputClassName = 'text-input';
  if (error) {
    inputClassName += ' text-input_error';
  }

  return (
    <label className='text-label' htmlFor={id}>
      <span>
        {label}
        {!!required && <span className='text-label__required'>*</span>}
      </span>
      <input className={inputClassName} id={id} type='text' placeholder={placeholder} autoComplete='off' {...props} />
      {!!errorMessage && (
        <p className='input__error' role='alert'>
          {errorMessage}
        </p>
      )}
    </label>
  );
};
