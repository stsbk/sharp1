import React from 'react';
import Section from '../src/components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import { useState } from 'react';

const App = () => {
  const [stats, setStats] = useState({
    feedbacks: {
      good: 0,
      neutral: 0,
      bad: 0
    },
    total: 0,
    positivePercentage: 0
  });

  const onLeaveFeedback = (value) => {
    setStats(stats.feedbacks[value] += 1);
  }

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stats.feedbacks.good}
          onLeaveFeedback={onLeaveFeedback}
        />
        <FeedbackOptions
          options={stats.feedbacks.bad}
          onLeaveFeedback={onLeaveFeedback}
        />
        <FeedbackOptions
          options={stats.feedbacks.neutral}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistic">
        <Statistics
          good={stats.feedbacks.good}
          neutral={stats.feedbacks.neutral}
          bad={stats.feedbacks.bad}
          total={stats.total}
          positivePercentage={stats.positivePercentage}
        />
      </Section>
    </div>
  );
}

export default App;
