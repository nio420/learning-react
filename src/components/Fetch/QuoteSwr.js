import useSWR from 'swr'

// fetch function
const fetcher = async (...args) => {
    const res = await fetch(...args)
    const data = await res.json()
    return data
}
export default function QuoteSwr (){
    // use swr 
    const {data, error} = useSWR("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://favqs.com/api/qotd"),fetcher, { suspense: true})
    console.log(data);
    if (error){
        return <h1> there was an error </h1>
    }

    return (
    <div className="quote"> 
        <h2> This is API </h2>
       <p> <span style={{color: 'red'}}> Author:</span> {data.quote?.author_permalink} </p> 
       <p>  <span style={{color: 'purple',}}> ID:</span>  {data.quote?.id}  </p> 
       <p>  <span style={{color: 'blue'}}> Url:</span> {data.quote?.url}  </p> 
       <p>  <span style={{color: 'orange'}}> body:</span> {data.quote?.body}  </p> 
       <p>  <span style={{color: 'green'}}> tags:</span> {data.quote?.tags}  </p> 
    </div>
    )
}
