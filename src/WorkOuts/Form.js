
import { Button } from 'react-bootstrap';
import './Form.css'

export default function Form() {
    function Name() {
        var N1 = document.getElementById('fname').value;
        alert(`Thank You ${N1}`)
    }
    return(
        <div className='MyFrom'>1
            <main>
                <h1>Feedback Form</h1>
                <form>
                    <lable>Name</lable>
                    <input type={Text} id='fname' placeholder='Enter the name'></input><br></br>
                    <lable>Email</lable>
                    <input type={'email'} placeholder='Enter the email id'></input><br></br>
                    <lable>Subject</lable>
                    <input type={Text} placeholder='Enter the subject'></input><br></br>
                    <lable>Message</lable>
                    <input type={Text} placeholder='Your message'></input><br></br>
                    {/* <input type={'button'} value='Sumbit' onClick={Name}></input> */}
                    <Button onClick={Name}>Sumbit</Button>
                </form>
            </main>
        </div>
    )
}