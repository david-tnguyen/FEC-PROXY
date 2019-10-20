import React from 'react';
import moment from 'moment';
import getPreviousMonth from '../../../utils/getPreviousMonth';
import getNextMonth from '../../../utils/getNextMonth';
import getBlankDays from './getBlankDays';
import getDays from './getDays';
import getWeeks from './getWeeks';
import Weeks from './Weeks';
import ChangeMonth from './ChangeMonth';
import MonthHeader from './MonthHeader';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      now: moment(),
      today: moment(),
      startDate: this.props.startDate,
      endDate: '',
      checkoutDate: this.props.endDate,
      blockedDates: []
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    fetch('http://localhost:3002/checkout')
    // fetch('http://reservation-env.deb9z9c295.us-east-1.elasticbeanstalk.com/checkout')
    .then(res => res.json())
    .then((json) => {
      this.setState({
        blockedDates: json,
        isMounted: true
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.onBlur();
  }

  onDateRangeSelect = (day, date) => {
    this.setState({
      endDate: date
    });
  }

  onDaySelect = (day, isBlocked, isOutsideRange) => {
    const dateSelected = moment([this.state.now.year(), this.state.now.month(), day])

    if (!isBlocked && this.props.type === 'startDate') {
      this.props.onDaySelect(dateSelected);
      this.setState({
        startDate: dateSelected
      });
    } else if (!isBlocked && !isOutsideRange && dateSelected >= this.state.startDate) {
      this.props.onDaySelect(dateSelected);
      this.setState({
        endDate: dateSelected,
      });
    }
  }

  handleNext = (e) => {
    e.preventDefault();
    this.setState({
      now: getNextMonth(this.state.now)
    });
  }

  handlePrev = (e) => {
    e.preventDefault();
    this.setState({
      now: getPreviousMonth(this.state.now)
    });
  }

  generateWeeks = () => {
    const blankDays = getBlankDays(this.state.now);
    const daysInMonth = getDays(
      this.state.now,
      this.state.blockedDates,
      this.state.startDate,
      this.state.endDate,
      this.state.today,
      this.state.checkoutDate,
      this.onDaySelect,
      this.onDateRangeSelect
    );
    return getWeeks([...blankDays, ...daysInMonth]);
  }

  render() {
    if (this.state.isMounted) {
      return (
        <div id="calendar-modal" ref={node => { this.node = node; }}>
          <div id="calendar-modal-padding">
            <div id="calendar-container">
              <ChangeMonth
                class="previous-month-container"
                handleMonthChange={this.handlePrev}
                icon="previous-month-arrow"
              />
              <MonthHeader now={this.state.now}/>
              <ChangeMonth
                class="next-month-container"
                handleMonthChange={this.handleNext}
                icon="next-month-arrow"
              />
            </div>
            <Weeks generateWeeks={this.generateWeeks}/>
          </div>
        </div>
      );
    } else {
      return (
        <div id="calendar-modal" ref={node => { this.node = node; }}></div>
      );
    }
  }
}

export default Calendar;