import './Feed.css'
import { Button } from 'react-bootstrap'

export default function Feed() {
    return(
        <div>
            <div className="main">
                <div className="header">
                    <h2>Website Feedback Form</h2>
                    <button>Download</button>
                </div>
                <div className="content">
                    <div className="name">
                        <label htmlFor="">Enter Your Full Name <span> * </span></label><br />
                        <input type="text" name="" id="" />
                    </div>
                    <div className="name">
                        <label htmlFor="">Enter Your Full Name <span> * </span></label><br />
                        <input type="text" name="" id="" />
                    </div>
                    <div className="radio">
                        <label htmlFor="">Is this first time you have visited the website ?<span> * </span></label><br />
                        <input type="radio" name="" id="" /><span id='color'> Yes </span><br />
                        <input type="radio" name="" id="" /><span id='color'> No </span>
                    </div>
                    <div className="textArea">
                        <label htmlFor="">What is the PRIMARY reason you came to the site ?</label><br />
                        <textarea name="" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="check">
                        <label htmlFor="">Did you find what you needed ? <span> * </span></label><br />
                        <input type="checkbox" name="" id="" /><span id='color'> Yes, all of it </span><br />
                        <input type="checkbox" name="" id="" /><span id='color'> Yes, some of it </span><br />
                        <input type="checkbox" name="" id="" /><span id='color'> No,none of it </span>
                    </div>
                    <div className="star">
                        <label htmlFor="">User Friendlyness <span> * </span></label>
                        <div className="stars">
                            
                        </div>
                    </div>
                    <div className="sendButton">
                        <Button>Send your feedback</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}