import {useState,useEffect } from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

export default function Ass5_1() {
  const [query, setQuery] = useState();
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=india"
  );

  useEffect(() => {
   //console.log("Fetching data..");
    const fetchdata = async () => {
      const result = await axios(url);
      setData(result.data);
       }; fetchdata();},[url]);
       console.log(data)

       const pages=6;
let [currentpage, setCurrentpage] = useState(1);
  const start = (currentpage - 1) * pages;
  const end = start + pages;
  console.log(end);
  let y = data.hits.slice(start, end);

  const page =20;
  const perpage = 6;
  const n = page/perpage;
  let z=[];
  for(let i=1; i<=n; i++){
    z.push(i)
  }

  function b(e){
        setCurrentpage(e.target.value);
      }      
  return (
    <>
      <Container>
        <h1>React Get-Data</h1>
        <form onSubmit={
          e=>
          {setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          e.preventDefault();
        }
        }>
          <input type="text" onChange={(e)=>setQuery(e.target.value)} />
          <button>Search</button>
        </form>   
        {y.map((item) => (
          <ul>
            <li>
              <a href={item.url}>
                {item.title} {data.map}
              </a>
            </li>
          </ul>
        ))}

   {z.map((item)=>(
              <input style={{width:'10%',marginRight:'1%',backgroundColor:'blue',borderRadius:'10px',color:'white'}} type="button" onClick={b} value={item} />
            ))}
      </Container>
      
    </>
  );
}