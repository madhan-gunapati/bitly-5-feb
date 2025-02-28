import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const RedirectionComponent = ()=>{
    const {id} = useParams()
    const navigate = useNavigate()
    

    useEffect( ()=>{
        const fetchData = async()=>{
            const url = 'http://localhost:3000/redirection-url'
            const options = {
                method:'PUT',
                headers:{
                    'Content-Type':'Application/json',
                    'Accept':'Application/json',
                    'Authorization':''
                },
                body:JSON.stringify({
                    short_url: 'tiny/'+id
                })
            }
            const response = await fetch(url,options)
            const redirec_url = await response.text()
            
            window.open('https://'+redirec_url)
        }
        fetchData();
       
    },[])

    return <div>
        <h1>This is Redirection Component</h1>
    </div>
}

export default RedirectionComponent