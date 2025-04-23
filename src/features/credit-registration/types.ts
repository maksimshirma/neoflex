import * as yup from 'yup';

export const enum InputsIds {
  Amount = 'amount',
  Term = 'term',
  Income = 'income',
  Registration = 'registration',
  Work = 'work',
  PersonalDataProcessing = 'personalDataProcessing',
  MailingList = 'mailingList',
}

export const enum InputLabels {
  Amount = 'Сумма',
  Term = 'Срок',
  Income = 'Ежемесячный доход',
  Registration = 'Адрес регистрации',
  Work = 'Место работы',
  PersonalDataProcessing = 'согласен на обработку персональных данных',
  MailingList = 'согласен на рассылку',
}

export const enum InputPlaceholders {
  Amount = 'Введите сумму',
  Term = 'Введите срок',
  Income = 'Введите доход',
  Registration = 'Введите адрес',
  Work = 'Введите наименование организации',
}

const requiredMessage = 'Обязательное поле для заполнения';
const positiveMessage = 'Значение должно быть положительным';
const numberTypeMessage = 'Введите корректное число';

const parseEmptyToUndefined = (value: any, originalValue: any) => {
  return originalValue === '' ? undefined : value;
};

export const schema = yup
  .object({
    [InputsIds.Amount]: yup
      .number()
      .transform(parseEmptyToUndefined)
      .typeError(numberTypeMessage)
      .positive(positiveMessage)
      .required(requiredMessage),
    [InputsIds.Term]: yup
      .number()
      .transform(parseEmptyToUndefined)
      .typeError(numberTypeMessage)
      .positive(positiveMessage)
      .integer()
      .required(requiredMessage),
    [InputsIds.Income]: yup
      .number()
      .transform(parseEmptyToUndefined)
      .typeError(numberTypeMessage)
      .positive(positiveMessage)
      .required(requiredMessage),
    [InputsIds.Registration]: yup.string().required(requiredMessage),
    [InputsIds.Work]: yup.string().required(requiredMessage),
    [InputsIds.PersonalDataProcessing]: yup.array(yup.string()).length(1, requiredMessage),
    [InputsIds.MailingList]: yup.array(yup.string()),
  })
  .required();
