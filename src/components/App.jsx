import { useState, useEffect } from 'react';
//COMPONENTS
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
//STYLES
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBAd] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedbackRate, setPositiveFeedbackRate] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositiveFeedbackRate(total ? Math.round((good / total) * 100) : 0);
  }, [good, total]);

  const onLeaveFeedback = e => {
    const key = e.currentTarget.name;
    switch (key) {
      case 'good':
        setGood(prev => (prev += 1));
        break;
      case 'neutral':
        setNeutral(prev => (prev += 1));
        break;
      case 'bad':
        setBAd(prev => (prev += 1));
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Section title="Please, leave Feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackRate}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
}
