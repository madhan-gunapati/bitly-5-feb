import { useState } from "react";

const UrlSubmission = ()=>{
  const [url, changeUrlState] =useState('')
  const [name, changeName] = useState('')
  const changeUrl = (e)=>{
    const new_url  = e.target.value;
    console.log(e.target.value)
    changeUrlState(new_url)
  }


  const getShortUrl = async()=>{
    const url = 'localhost:3000'
    const options = {
      method:'GET',
      headers:{},
      body:{

      }
    }
    const response = await fetch(url, options)
  }

    return <div>
              <h4>Enter the Long link below and wait for the short url</h4>
              <div id='url-input'>
                    <input type="text" value={url} placeholder="link" onChange={changeUrl} />
                    <input type="text" value={name} placeholder="name" />
                    <button type="button" onClick={()=>{console.log(url)}}>Submit URL</button>
              </div>
            </div>
}

export default UrlSubmission