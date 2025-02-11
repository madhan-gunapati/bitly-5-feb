import { useState } from "react";
import { Link } from "react-router-dom";

const UrlSubmission = ()=>{
  const [input_url, changeUrlState] =useState('')
  const [email, changeEmail] = useState('')


  const changeUrl = (e)=>{
    const new_url  = e.target.value;
    
    changeUrlState(new_url)
  }


  const changeEmailInput = (e)=>{
        changeEmail(e.target.value)

}

  const getShortUrl = async()=>{
    const url = 'http://localhost:3000/short-url'
    const options = {
      method:'PUT',
      headers:{
        'Content-Type':'Application/json',
        'Accept':'Application/json',
        Authorization:''
      },
      body:JSON.stringify({input_url,email })
    }
    const response = await fetch(url, options)
    const text = await response.text()
    console.log(text)
  }

    return <div>
              <h4>Enter the Long link below and wait for the short url</h4>
              <div id='url-input'>
                    <input type="text" value={input_url} placeholder="link" onChange={changeUrl} />
                    <input type="text" value={email} placeholder="email" onChange={changeEmailInput} />
                    <button type="button" onClick={getShortUrl}>Submit URL</button>
                  <Link to='/home'> <button type="button">Go Home</button> </Link> 
              </div>
            </div>
}

export default UrlSubmission