import { useFormik} from "formik";

export default function Formi() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("You are Successfully Login");
    },
    validate: (values) => {
      const errors = { };
      if (!values.email) {
        errors.email = "* This field is Required";
      }
      if (!values.password) {
        errors.password = "* This field is Required";
      }
      return errors;
    },
  });

  return (
    
    <form style={{border:'2px solid black',width : '40%',margin : ' 10px auto',padding : '10px'}} onSubmit={formik.handleSubmit}>
      <h1>Formik Method Form</h1>
      <div style={{padding : '10px'}}>
        <label htmlFor="email">Email Address :</label>
        <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div style={{color : 'red'}}>{formik.errors.email}</div> :null}
      </div>
      <div style={{padding : '10px'}}>
        <label htmlFor="password">Password : </label>&nbsp;
         <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div style={{color : 'red'}}>{formik.errors.password}</div> :null}</div>
      <button type="submit" >Submit</button>
    </form>
  );
}
