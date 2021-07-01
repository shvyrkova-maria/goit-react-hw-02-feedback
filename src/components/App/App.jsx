import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
// import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
// import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          {/* <FeedbackOptions
          options={[this.state.good, this.state.neutral, this.state.bad]}
          onLeaveFeedback={}
          /> */}
        </Section>

        <Section title={'Statistics'}>
          {/* <Statistics
          good={}
          neutral={}
          bad={}
          total={}
          positivePercentage={}
          /> */}
          <Notification message={'No feedback given'} />
        </Section>
      </>
    );
  }
}
