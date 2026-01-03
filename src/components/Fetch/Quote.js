import {useState, useEffect } from 'react'
import axios from 'axios'

export default function Quote (){
    const [ quote, setQuote ] = useState(null)

useEffect(() => {
const fetchQuote = async () => {
  try {
    const res = await axios.get(  // use axios wehn not fetch method
      "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://favqs.com/api/qotd")
    );
    //const data = await res.json(); -- use when fetch 
    setQuote(res.data.quote);
  } catch (err) {
    console.error(err);
  }
};
        fetchQuote()
    }, [])
    return (
    <div className="quote"> 
        <h2> This is API </h2>
       <p> <span style={{color: 'red'}}> Author:</span> {quote?.author_permalink} </p> 
       <p>  <span style={{color: 'purple',}}> ID:</span>  {quote?.id}  </p> 
       <p>  <span style={{color: 'blue'}}> Url:</span> {quote?.url}  </p> 
       <p>  <span style={{color: 'orange'}}> body:</span> {quote?.body}  </p> 
       <p>  <span style={{color: 'green'}}> tags:</span> {quote?.tags}  </p> 
    </div>
    )
}
