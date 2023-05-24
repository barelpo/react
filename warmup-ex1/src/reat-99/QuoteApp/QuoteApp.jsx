import { useEffect, useState } from "react";
import "axios";
import axios from "axios";

const QuoteApp = () => {

  const [seconds, setSeconds] = useState(0)

  const [url, setUrl] = useState("")

  const [restart, setRestart] = useState(false)

  const[quote, setQuote] = useState("")


  // useEffect(() =>{
    
  //   setInterval(async () =>{
  //     const res = await axios.get(url)
  //     if(url === 'https://api.quotable.io/random'){
  //       setQuote(res.data["content"])
  //     } else if (url === 'https://api.chucknorris.io/jokes/random'){
  //       setQuote(res.data["value"])
  //     } else{
  //       setQuote(res.data["quote"])
  //     }}

  //   , seconds*1000)}, [restart])


  return(
    <>
    <select value={url} onChange={e => setUrl(e.target.value)}>
      <option value="https://api.quotable.io/random">Quoteable</option>
      <option value="https://api.chucknorris.io/jokes/random">Chck Norris</option>
      <option value="https://api.kanye.rest">Kanye</option>
    </select>

    <input placeholder="Insert seconds" onChange={e => setSeconds(e.target.value)} value={seconds}></input>

    <button onClick={() => setRestart(!restart)}>OK</button>

    <p>{quote}</p>
    </>
  )
}

export default QuoteApp;