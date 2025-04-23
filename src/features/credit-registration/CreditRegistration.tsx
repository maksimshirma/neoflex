import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, icons, Input, useNotification } from '@/shared';
import { InputLabels, InputPlaceholders, InputsIds, schema } from './types';
import './styles.css';

export const CreditRegistration: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      [InputsIds.Amount]: undefined,
      [InputsIds.Term]: undefined,
      [InputsIds.Income]: undefined,
      [InputsIds.Registration]: '',
      [InputsIds.Work]: '',
      [InputsIds.PersonalDataProcessing]: [],
      [InputsIds.MailingList]: [],
    },
  });

  const { showNotification } = useNotification();

  const onSubmit = (data: any) => {
    console.log(data);
    showNotification(
      'Заявка оформлена\nБанк рассмотрит заявление в течении 1 рабочего дня',
      <icons.NotificationOk />,
      10000,
    );
    throw new Error('Function not implemented yet.');
  };

  const getError = (inputId: InputsIds) => {
    return !!errors[inputId];
  };

  const getErrorMessage = (inputId: InputsIds) => {
    if (errors[inputId]) {
      return errors[inputId].message;
    }

    return undefined;
  };

  return (
    <form className='credit-registration' onSubmit={handleSubmit(onSubmit)}>
      <div className='credit-registration__inputs-area'>
        <Input
          id={InputsIds.Amount}
          label={InputLabels.Amount}
          placeholder={InputPlaceholders.Amount}
          error={getError(InputsIds.Amount)}
          errorMessage={getErrorMessage(InputsIds.Amount)}
          required
          {...register(InputsIds.Amount, { required: true })}
        />
        <Input
          id={InputsIds.Term}
          label={InputLabels.Term}
          placeholder={InputPlaceholders.Term}
          error={getError(InputsIds.Term)}
          errorMessage={getErrorMessage(InputsIds.Term)}
          required
          {...register(InputsIds.Term, { required: true })}
        />
        <Input
          id={InputsIds.Income}
          label={InputLabels.Income}
          placeholder={InputPlaceholders.Income}
          error={getError(InputsIds.Income)}
          errorMessage={getErrorMessage(InputsIds.Income)}
          required
          {...register(InputsIds.Income, { required: true })}
        />
        <Input
          id={InputsIds.Registration}
          label={InputLabels.Registration}
          placeholder={InputPlaceholders.Registration}
          error={getError(InputsIds.Registration)}
          errorMessage={getErrorMessage(InputsIds.Registration)}
          required
          {...register(InputsIds.Registration, { required: true })}
        />
        <Input
          id={InputsIds.Work}
          label={InputLabels.Work}
          placeholder={InputPlaceholders.Work}
          error={getError(InputsIds.Work)}
          errorMessage={getErrorMessage(InputsIds.Work)}
          required
          {...register(InputsIds.Work, { required: true })}
        />
      </div>
      <div className='credit-registration__checkboxes-area'>
        <Checkbox
          id={InputsIds.PersonalDataProcessing}
          label={InputLabels.PersonalDataProcessing}
          error={getError(InputsIds.PersonalDataProcessing)}
          errorMessage={getErrorMessage(InputsIds.PersonalDataProcessing)}
          required
          {...register(InputsIds.PersonalDataProcessing, { required: true })}
        />
        <Checkbox
          id={InputsIds.MailingList}
          label={InputLabels.MailingList}
          {...register(InputsIds.MailingList, { required: true })}
        />
      </div>
      <div className='credit-registration__submit-button'>
        <Button text='Оформить' htmlType='submit' />
      </div>
    </form>
  );
};
