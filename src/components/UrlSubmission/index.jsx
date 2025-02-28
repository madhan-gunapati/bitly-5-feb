import { useState } from "react";
import { Link } from "react-router-dom";
import { getShortUrl } from "../../state/MiniurlSlice";
import { useDispatch, useSelector } from "react-redux";
import { remove_jwt_token } from "../../state/LoginSlice";

const UrlSubmission = ()=>{
  
  
  const [input_url, changeUrlState] =useState('')
  // const [email, changeEmail] = useState('')
  const [response, changeResponse] = useState('...')
  const {short_url, error_msg , loading} = useSelector((state)=>state.MiniurlSlice)
  
  const dispatch = useDispatch()

  const changeUrl = (e)=>{
    const new_url  = e.target.value;
    
    changeUrlState(new_url)
  }


  const changeEmailInput = (e)=>{
        changeEmail(e.target.value)

}

  // const getShortUrl = async()=>{
  //   const url = 'http://localhost:3000/short-url'
  //   const options = {
  //     method:'PUT',
  //     headers:{
  //       'Content-Type':'Application/json',
  //       'Accept':'Application/json',
  //       Authorization:''
  //     },
  //     body:JSON.stringify({input_url,email })
  //   }
  //   const response = await fetch(url, options)
  //   const text = await response.text()
  //   changeResponse(text)
    
  // }

    return <div>
              <h4>Enter the Long link below and wait for the short url</h4>
              <div id='url-input'>
                    <input type="text" value={input_url} placeholder="link" onChange={changeUrl} /> <br />
                    {/* <input type="text" value={email} placeholder="email" onChange={changeEmailInput} /> <br /> */}
                    <button type="button" onClick={()=>{dispatch(getShortUrl({input_url}))}}>Submit URL</button>
                  
              </div>
              <h3>Your Tiny Url : {short_url}</h3>
              
              <button type="button" onClick={()=>{dispatch(remove_jwt_token())}}>LOGOUT USER</button>
              </div>
            
}

export default UrlSubmission