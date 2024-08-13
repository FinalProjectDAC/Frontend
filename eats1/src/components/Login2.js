import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function Login2() {

  var [customer, setcustomer] = useState(
    { username: "", password: "" });
  var [role, setRole] = useState({ role: "Customer" })
  var [Loginstatus1, setLoginstatus1] = useState("")
  // const history = useHistory();
  const navigate = useNavigate();


 

  var HandleChange = (args) => {
    var copycustomer = { ...customer };
    console.log(args.value + " " + args.name);
    copycustomer[args.target.name] = args.target.value;
    setcustomer(copycustomer);
    console.log(copycustomer);

  }



  var selectedRole = (arg) => {

    console.log(arg.target.value)
    setRole({ role: arg.target.value })

  }

  var saveRole = () => {

    sessionStorage.clear();
    sessionStorage.setItem("role", role.role);

  }

  return (

    <div className="container">
      <h2 style={{ textAlignVertical: "center", textAlign: "center", }} >{role.role} Login</h2>
      <center><h5 id="error1" style={{ color: "red" }}>{Loginstatus1}</h5></center>
      <select class="selectpicker btn btn-warning" onChange={selectedRole}>
        <option title="Combo 1">Customer</option>
        <option title="Combo 2">Hotel Owner</option>
        <option title="Combo 3">Delivery Partner</option>
        <option title="Combo 3">Admin</option>
      </select>
      <br></br>
      <br></br>
      {/* <form> */}
      {/* Email input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">Email address</label>
        <input type="email" id="form2Example1" onChange={HandleChange} placeholder="Enter Username" name="username" className="form-control" />
        <div>
          <h6 style={{ color: "red" }} id="error1"></h6>
        </div>
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">Password</label>
        <input type="password" onChange={HandleChange} placeholder="Enter Password" id="form2Example2" name="password" className="form-control" />
        <div>
          <h6 style={{ color: "red" }} id="error2"></h6>
        </div>

      </div>

      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>
        <div className="col">
          {/* Simple link */}
          <a href="/forgot">Forgot password?</a>
        </div>
      </div>
      {/* Submit button */}
      {/* //a href="/afterLogin" */}
      <center><button onClick={()=>{}} className="btn btn-primary btn-block mb-4">Log in</button></center>
      {/* Register buttons */}
      <div className="text-center">
        <p>Not a member? <a href="/register" className="btn btn-success" onClick={saveRole}>Register</a></p>
      </div>
      {/* </form> */}
    </div>
  );
}

export default Login2;