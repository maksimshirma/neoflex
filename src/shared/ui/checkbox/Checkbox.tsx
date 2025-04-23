import { FC, InputHTMLAttributes } from 'react';
import './styles.css';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> {
  id: string;
  label: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const Checkbox: FC<Props> = ({ id, label, required, error, errorMessage, ...props }) => {
  let inputClassName = 'checkbox-input';
  if (error) {
    inputClassName += ' checkbox-input_error';
  }

  return (
    <label className='checkbox-label' htmlFor={id}>
      <div className='checkbox-label__group'>
        <input className={inputClassName} id={id} type='checkbox' {...props} />
        <span>
          {label}
          {!!required && <span className='text-label__required'>*</span>}
        </span>
      </div>
      {!!errorMessage && (
        <p className='input__error' role='alert'>
          {errorMessage}
        </p>
      )}
    </label>
  );
};
