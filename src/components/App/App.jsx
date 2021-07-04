import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreaseValue = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  getTotalValue = () => {
    let currValues = Object.values(this.state);
    return (currValues = currValues.reduce((total, value) => total + value));
  };

  getPercentage = () => {
    const { good } = this.state;
    const total = this.getTotalValue();
    const percentage = Math.round((good / total) * 100);

    if (isNaN(percentage)) return;
    else {
      return Math.round((good / total) * 100);
    }
  };

  render() {
    const { state, handleIncreaseValue, getTotalValue, getPercentage } = this;
    const { good, neutral, bad } = this.state;
    const options = Object.keys(state);
    const total = getTotalValue();
    const positivePercentage = getPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleIncreaseValue}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
