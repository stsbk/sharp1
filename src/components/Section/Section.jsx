import React from 'react';

export const Section = ({ title, children }) => {
    return (
        <>
            <h1>{title}</h1>
            <ul>{children}</ul>
        </>
    )
}
