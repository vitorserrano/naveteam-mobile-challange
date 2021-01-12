import moment from 'moment';

export const formatDate = (date: string | Date): string => {
  return moment.utc(new Date(date)).format('DD/MM/YYYY');
};

export const formatDateDifference = (date: string): string => {
  const formatedDate = moment.utc(new Date(date)).format('YYYY-MM-DD');
  const dateDifferenceDays = moment().diff(formatedDate, 'days');
  const dateDifferenceMonths = moment().diff(formatedDate, 'months');
  const dateDifferenceYears = moment().diff(formatedDate, 'years');

  if (dateDifferenceDays === 0) {
    return 'Entrou na empresa hoje.';
  }

  if (dateDifferenceDays === 1) {
    return `${dateDifferenceDays} dia`;
  }

  if (dateDifferenceDays > 1 && dateDifferenceDays < 30) {
    return `${dateDifferenceDays} dias`;
  }

  if (dateDifferenceMonths === 1) {
    return `${dateDifferenceMonths} mês`;
  }

  if (dateDifferenceMonths < 12) {
    return `${dateDifferenceMonths} meses`;
  }

  if (dateDifferenceMonths === 12) {
    return `${dateDifferenceYears} ano`;
  }

  return `${dateDifferenceYears} anos`;
};
