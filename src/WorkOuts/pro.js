function formatName() {
    return user.name + ' ' + user.age
}

const user = {
    name : 'Hems',age:15
}

const style = {
    fontFamily:'Arial',color:'green'
}
// function vote() {
//     if(user.age >= 18)
//     {
//         return(`Hello ${user.name} eligible to vote`)
//     }
//     else
//     {
//         return(`Hello ${user.name} not eligible to vote`)
//     }
// }

const MIT = <a href="https://www.instagram.com/" style={style}>Instagtam</a>

function Element(){
return <h1>{MIT}</h1>
// if (user.age>18){
//     return(<h1 style={style}> Hello {formatName(user)} you are eligible to vote  </h1>)}
//     else{
//         return(<h1 style={style}> Hello {formatName(user)} you are  noteligible to vote  </h1>)}

   }

export default Element