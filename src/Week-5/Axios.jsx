import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function UsingAxios() {
    const[url, setUrl]=useState('https://hn.algolia.com/api/v1/search?query=India')
    const[data, setData]=useState({hits:[]})
    const[query, setQuery]=useState('')

    useEffect(()=>{
        console.log('Fetching data....')
        const fetchdata = async()=>{
            const result = await axios(url)
            setData(result.data)
        };fetchdata()
    },[url])

    function handleSubmit(e) {
        e.preventDefault()
        setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    }

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setQuery(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {data.hits.map((item,index)=><li><a href={item.url}>{item.title}</a></li>)}
        </Container>
    )
}