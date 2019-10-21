import React from 'react';
import moment from 'moment';
import getFirstDayOfMonth from '../../../../utils/getFirstDayOfMonth';
import getDaysInMonth from '../../../../utils/getDaysInMonth';
import classNames from 'classnames';
import styles from './getDays.scss';

export default (now, blockedDates, startDate, endDate, today, checkoutDate, onDaySelect, onDateRangeSelect) => {
  const daysInMonth = [];
  for (let i = 1; i <= getDaysInMonth(now); i++) {
    const dateSelected = moment([now.year(), now.month(), i])
    let isBlocked = false;
    let isOutsideRange = false;

    for (let i = 0; i < blockedDates.length; i++) {
      if (dateSelected >= moment(blockedDates[i]['checkin']) && dateSelected <= moment(blockedDates[i]['checkout'])) {
        isBlocked = true;
      }

      if (dateSelected >= moment(blockedDates[i]['checkin']) && moment(blockedDates[i]['checkout']) >= startDate) {
        isOutsideRange = true;
      }
    }

    if (dateSelected < today) {
      isBlocked = true;
    }

    const dayClass = classNames(styles['calendar-day'], {
      [styles['blocked-day']]: isBlocked,
      [styles['active-day']]: !isBlocked && !startDate || dateSelected < startDate && dateSelected !== endDate,
      [styles['start-date-select']]: !isBlocked && dateSelected.isSame(startDate),
      [styles['date-range-span']]: !isBlocked && !isOutsideRange && startDate && dateSelected > startDate && dateSelected <= endDate,
      [styles['date-range-span-selected']]: !isBlocked && !isOutsideRange && dateSelected > startDate && dateSelected <= checkoutDate,
    });

    daysInMonth.push(
      <td
        key={parseInt(i) + parseInt(getFirstDayOfMonth(now))}
        onMouseDown={ () => onDaySelect(i, isBlocked, isOutsideRange) }
        onMouseEnter={ () => onDateRangeSelect(i, dateSelected) }
        className={dayClass}
      >
        {i}
      </td>
    );
  }
  return daysInMonth;
}