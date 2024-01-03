import { Button } from "react-bootstrap"

import './feedBack.css'

export default function FeedBackForm() {


    return(
        <div className="main">
            <div className="top">
                <div className="header"><h1>Website Feedback Form</h1></div>
                <div className="downloadBuuton"><Button>Download</Button></div>
            </div>
            <div className="info">
                    <div className="name">
                    <label htmlFor="">Enter Your Full Name</label><span> * </span><br />
                    <input type="text" name="name" id="name" />
                    </div>
                    <div className="email">
                        <label htmlFor="">Your Email address</label><span> * </span><br />
                        <input type="email" name="email" id="" />
                    </div>
                </div>
                <div className="radio">
                            <p>Is this the first time you have visited the website ?<span> * </span></p>
                            <input type="radio" name="radio" id="r1" /><span id="blue"> Yes </span><br />
                            <input type="radio" name="radio" id="r2" /><span id="blue"> No </span>
                        </div>
                        <div className="text">
                            <p>What is the PRIMARY reason you came to the site ?</p>
                            <textarea name="" id="" cols="50" rows="3"></textarea>
                        </div>
                        <div className="check">
                            <p>Did you find what you needed ?</p>
                            <input type="checkbox" name="" id="" /><br />
                            <input type="checkbox" name="" id="" /><br />
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="star">
                            <p>User Friendlyness<span> * </span></p>
                            <div className="stars">
                            <div className="star1">*</div>
                            <div className="star2">*</div>
                            <div className="star3">*</div>
                            <div className="star4">*</div>
                            <div className="star5">*</div>
                            </div>
                        </div>
                        <div className="sendButton">
                            <Button>Send your feedback</Button>
                        </div>
        </div>
    )
}