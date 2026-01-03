import React from 'react'
import {useState, useEffect } from 'react'
import QuoteQuery from './components/Fetch/QuoteQuery'
import { QueryClientProvider, QueryClient } from 'react-query'
import Omit from './components/Omit'


function AppTest (){
        const [ quote, setQuote ] = useState(null)
        const client = new QueryClient()
useEffect(() => {
const fetchQuote = async () => {
  try {
    const res = await fetch(  // use axios wehn not fetch method
      "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://favqs.com/api/qotd")
    );
    const data = await res.json(); 
    setQuote(data.quote);
  } catch (err) {
    console.error(err);
  }
};
        fetchQuote()
    }, [])
    return (
        <div>
            <QueryClientProvider client={client} > 
             <QuoteQuery quote={quote} />
             <QuoteQuery quote={quote} />
            </QueryClientProvider>
            <Omit/>
        </div>
    )
}

export default AppTest;