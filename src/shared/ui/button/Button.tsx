import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { ButtonIconPlacement, ButtonType } from './types';
import './styles.css';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  text?: string;
  type?: ButtonType;
  icon?: ReactNode;
  iconPlacement?: ButtonIconPlacement;
  flat?: boolean;
}

export const Button: FC<Props> = ({
  className,
  text,
  type = ButtonType.Primary,
  icon,
  iconPlacement = ButtonIconPlacement.Start,
  flat,
  ...props
}) => {
  let buttonClassName = `button button_${type}`;
  if (icon) {
    buttonClassName += ` button_icon-${iconPlacement}`;
  }
  if (flat) {
    buttonClassName += ` button_flat`;
  }
  if (className) {
    buttonClassName += ` ${className}`;
  }

  return (
    <button className={buttonClassName} {...props}>
      {!!icon && <div className='button__icon'>{icon}</div>}
      <span className='button__text'>{text}</span>
    </button>
  );
};
