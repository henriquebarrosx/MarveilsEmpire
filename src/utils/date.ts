import moment from 'moment';
import 'moment/locale/pt'

export function formatDate(date: string | Date, format: DateFormat) {
  const dateTime = new Date().getTime();
  const isValidDate = Number.isInteger(dateTime);

  if (isValidDate) {
    return moment(date).format(format);
  }

  throw new Error('Should be provided a valid date');
}

// It could be updated since depends of which format should be displayed
type DateFormat = 'DD/MM/YYYY'