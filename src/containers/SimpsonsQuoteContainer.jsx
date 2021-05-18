import React from 'react';
import {useState} from 'react';
import Fetch from '../components/presentational/Fetch';
import Quote from '../components/presentational/Quote';
import {getQuote} from '../services/simpsonsApi';

function SimpsonsQuoteContainer() {

    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
        setLoading(false);
    } 

    return (
        <>
            <Fetch onClick={handleClick} />
            {loading === true && <p>Loading...</p>}
            {loading === false && <Quote {...quote} />}
        </>
    )
}


export default SimpsonsQuoteContainer;

