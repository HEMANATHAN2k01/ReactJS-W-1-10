import { useFormik } from "formik"

export default function Form1() {
    const formik = useFormik({
        initialValues:{
            email:''
        },
        onSubmit:(values) =>
        {
            console.log(values)
        },
        validate:(values) =>{
            let errors ={}
            if (!values.email) errors.email = 'Required'
            return errors
        }
    })
    
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor=""> Email Address</label>
            <input type="email" name="email" id="email" onChange={formik.values.email} value={formik.values.email} />
            {formik.errors.email ? 
        <div>{formik.errors.email}</div>: null}
        <button type="submit">Sumbit</button>
        </form>
    )
}