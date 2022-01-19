import { useState } from "react";
import "./siginform.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons";    
export default function Signinform() {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  
  const [errors, setErrors] = useState({
      emailErr: null,
      passwordErr: null,
    });
    
    const [passwordShow, setPasswordShow]= useState(false)
    const toggelpassword = () => {
        setPasswordShow(!passwordShow);
    } 

  const regexForPassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  regexForEmail =    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const changeData = (e) => {
    if (e.target.name === "email") {
      setUserForm({
        ...userForm,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
           :e.target.value.match(regexForEmail)
           ? null
            :"This email is not valid",
      });
    } else if (e.target.name === "password") {
      setUserForm({
        ...userForm,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 8
            ? "Min. length is 8 characters"
            :e.target.value.match(regexForPassword)
            ? null
            :"at least one uppercase letter, one lowercase letter, one number and one special character:",
      });
    }
  };
  
  const submitUserDataForm = (e) => {
    e.preventDefault();
    if (!errors.emailErr && !errors.passwordErr) {
      console.log(userForm);
    }
  };
  return (
    <div className="container py-5 border mt-5 col-lg-4 col-md-3 col-sm-2 ">
      <h1 className="text-uppercase text-center mb-4" >sign in form</h1>   
      <form onSubmit={(e) => submitUserDataForm(e)}>
          <div className="mb-3">
          <label htmlFor="emailID" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.emailErr ? "border-danger" : ""
            }`}
            id="emailID"
            aria-describedby="email"
            value={userForm.email}
            onChange={(e) => changeData(e)}
            name="email"
          />
          <div id="email" className="form-text text-danger">
            {errors.emailErr}
          </div>
        </div>
        <div className="mb-3">
            <label htmlFor="passwordID" className="form-label">
                Password
            </label>
            <span className="icondev" >
            <input
                type={ passwordShow ? "text" : "password"}
                className={`form-control ${
                errors.passwordErr ? "border-danger" : ""
                }`}
                id="passwordID"
                aria-describedby="password"
                value={userForm.password}
                onChange={(e) => changeData(e)}
                name="password"
            />
            <FontAwesomeIcon className=" fs-5 icon1" icon={faEyeSlash} onClick={toggelpassword} />
            </span>
        </div>
          <div id="password" className="form-text text-danger">
            {errors.passwordErr}
          </div>
          <Link to="/">
        <button
          type="submit"
          disabled={errors.passwordErr || errors.emailErr}
          className="btn btn-dark"
        >
          Confirm
        </button>
          </Link>
      </form>
    </div>
  );
}
