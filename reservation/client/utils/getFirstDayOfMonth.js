import moment from 'moment';

export default (now) => {
  return moment(now).startOf('month').format('d');
}