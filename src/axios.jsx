import axios from "axios"
import { useEffect,useState } from "react"

export default function Getdata() {

    const[data, setData] = useState([])
    const[ax_data, setAx_data] = useState([])

    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err =>console.log(err))

            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setAx_data(res.data))
            .catch(err =>console.log(err))
        },[]
    )

    return(
        <div>
            <div>
            <h1>Using Fatch</h1>
            {/* {
                data.map(u=>(
                    <div>
                        Name : {u.name},
                        Address : {u.address.city}
                    </div>
                ))
            } */}
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>MobileNo</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d=>{
                  return(
                    <tr>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.address.city}</td>
                      <td>{d.phone}</td>
                      <td><a href={d.website}>{d.website}</a></td>
                    </tr>
                  )
                }))
              }
            </tbody>
          </table>
            </div><hr></hr>
            <div>
            <h1>Using axios</h1>
            {/* {
                ax_data.map(u=>(
                    <div>
                        {u.name}
                    </div>
                ))
            } */}
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>MobileNo</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {
                ax_data.map((d=>{
                  return(
                    <tr>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.address.city}</td>
                      <td>{d.phone}</td>
                      <td><a href={d.website}>{d.website}</a></td>
                    </tr>
                  )
                }))
              }
            </tbody>
          </table>
            </div>
        </div>
    )
} 