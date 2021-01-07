import React, { createContext, useState } from 'react';

export const QuoteContext = createContext();

export const QuoteProvider = props => {

    const [quote, setQuote] = useState({
        quote: 'The present is theirs; the future, for which I really worked, is mine.',
        author: 'Nikola Tesla'
    })

    return(
        <QuoteContext.Provider value={[quote, setQuote]}>
            {props.children}
        </QuoteContext.Provider>
    );
};