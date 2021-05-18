import React from 'react';
import PropTypes from 'prop-types';

function Quote({image, name, text}) {
    return (
        <>
        <h2>{name}</h2>
        <p><img src={image} alt={name} /></p> 
        <p>Quote: {text}</p>
        </>
    )
}

Quote.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Quote;

