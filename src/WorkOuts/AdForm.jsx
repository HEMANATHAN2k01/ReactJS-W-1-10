import { useFormik } from "formik";
import { Button } from "react-bootstrap";

import './adform.css'

export default function AdmForm() {

    const formi = useFormik(
        {
            initialValues:{
                
                name:'',name1:''
            },
            onSubmit:(values)=>
            {
                alert(values)
            },
            validate:(values)=>{
                let errors ={}
                if(!values.name) errors.name = 'Required'
                if(!values.name1) errors.name1 = 'Required'
                return errors
            }
        }
    )

    return(
        <div>
            <div className="form">
                <h1>COLLEGE APPLICATION FORM</h1>
                <form className="for" action="" onSubmit={formi.handleSubmit}>
                    <div className="dName">
                        <label htmlFor="">Name</label>
                        <div className="Name">
                            <div className="fname">
                                <input type="text" name="name" id="" placeholder="FirstName.." onChange={formi.handleChange} value={formi.values.name} /><br />
                                {formi.errors.name ? <div>{formi.errors.name}</div>:null}
                            </div>
                            <div className="fname">
                                <input type="text" name="name1" id="" placeholder="LastName.." onChange={formi.handleChange} value={formi.values.name1} /><br />
                                {formi.errors.name1 ? <div>{formi.errors.name1}</div>:null}
                            </div>
                        </div>
                        <div className="dG-DOB">
                            <div className="Gen-DOB">
                                <div className="Gen">
                                    <label htmlFor="">Gender</label>
                                    <div className="">
                                        <select name="" id="">
                                            <optgroup>
                                                <option value="">Please Select</option>
                                                <option value="">Mela</option>
                                                <option value="">Female</option>
                                                <option value="">N/A</option>
                                                </optgroup>
                                        </select>
                                    </div>
                                </div>
                                <div className="DOB">
                                    <label htmlFor="">Date of Birth</label>
                                    <div className="">
                                        <input type="date" name="" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}