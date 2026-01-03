//import {useState, useEffect } from 'react'

export default function QuoteQuery ({quote}){

    return (
    <div className="quote"> 
        <h2> This is API </h2>
      <p> <span style={{color: 'red'}}> Author:</span> {quote?.author_permalink} </p> 
       <p> <span style={{color: 'red'}}> Author:</span> {quote?.author_permalink} </p> 
       <p>  <span style={{color: 'purple',}}> ID:</span>  {quote?.id}  </p> 
       <p>  <span style={{color: 'blue'}}> Url:</span> {quote?.url}  </p> 
       <p>  <span style={{color: 'orange'}}> body:</span> {quote?.body}  </p> 
       <p>  <span style={{color: 'green'}}> tags:</span> {quote?.tags}  </p> 
    </div>
    )
}
