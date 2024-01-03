//import { Button } from "react-bootstrap";
export default function CA_7_2(){
    async function loadPage(){
          console.log(window.location.hash);
          let page      = window.location.hash.replace('#', '');
          const res     = await fetch(page);
          const content = await res.text();
          const element = document.getElementById('content');
          element.innerHTML = content;
      };            
  
      window.addEventListener('hashchange', loadPage);    
      return(
        <div style={{background:'brown',textAlign:'center',padding:'10px'}}>
          <div>
            <div><h1>Welcome to Hollywood Classic Films?</h1></div>
            <div>
              <button style={{padding:'5px',width:'8%',borderRadius:'10px'}}>
                {<a href="#about.html">About</a>}</button>&nbsp;
              <button style={{padding:'5px',width:'8%',borderRadius:'10px'}}>
                {<a href="#product.html">Product</a>}</button>&nbsp;
              <button style={{padding:'5px',width:'8%',borderRadius:'10px'}}>
                {<a href="#checkout.html">CheckOut</a>}</button>
            </div>
          </div>
          <div id="content"></div>
        </div>
      )
  }