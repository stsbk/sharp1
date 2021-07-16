import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <button onClick={onLeaveFeedback(options)}>{options}</button>
    )
}
