import React from 'react';
import PropTypes from 'prop-types';

function Fetch({ onClick }) {
    return (
        <>
        <h2>Click for another quote!</h2>
         <button onClick={onClick}>Fetch</button>
        </>
    )
}

Fetch.propTypes = {

}

export default Fetch;

