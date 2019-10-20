import React from 'react';
import moment from 'moment';
import getFirstDayOfMonth from '../../../../utils/getFirstDayOfMonth';
import getDaysInMonth from '../../../../utils/getDaysInMonth';
import classNames from 'classnames';

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

    const dayClass = classNames({
      'calendar-day': true,
      'blocked-day': isBlocked,
      'active-day': !isBlocked && !startDate || dateSelected < startDate && dateSelected !== endDate,
      'start-date-select': !isBlocked && dateSelected.isSame(startDate),
      'date-range-span': !isBlocked && !isOutsideRange && startDate && dateSelected > startDate && dateSelected <= endDate,
      'date-range-span-selected': !isBlocked && !isOutsideRange && dateSelected > startDate && dateSelected <= checkoutDate,
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