import { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons";
export default function SignUpForm() {
  const [userForm, setUserForm] = useState({
    name:"",
    email: "",
    username:"",
    password:"",
    confirmpassword:""
  });

  const [errors, setErrors] = useState({
      nameErr:null,
      emailErr: null,
      usernameErr: null,
      passwordErr: null,
      confirmpasswordErr: null,
    });
    const [passwordShow, setPasswordShow]= useState(false)
    const toggelpassword = () => {
        setPasswordShow(!passwordShow);
    }

  const regexForPassword= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  regexforname=/^[a-zA-Z\s]*$/,
  regexforusername=/^[A-Za-z0-9]+$/,
  regexForEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    }else if (e.target.name === "confirmpassword") {
      setUserForm({
        ...userForm,
        confirmpassword: e.target.value,
      });
      setErrors({
        ...errors,
        confirmpasswordErr:
          e.target.value.length === 0
            ? "This field is required"
            :e.target.value === userForm.password
            ? null
            :"It must match the password",
      });
    }else if (e.target.name === "name") {
      setUserForm({
        ...userForm,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        nameErr:
          e.target.value.length === 0
            ? "This field is required"
            :e.target.value.match(regexforname)
            ? null
            :"Enter first and last name",
      });

    }
    else if (e.target.name === "username") {
      setUserForm({
        ...userForm,
        username: e.target.value,
      });
      setErrors({
        ...errors,
        usernameErr:
          e.target.value.length === 0
            ? "This field is required"
            :e.target.value.match(regexforusername)
            ? null
            :"Enter username without spaces",
      });
    }
  };
  const submitUserDataForm = (e) => {
    e.preventDefault();
    if (!errors.nameErr && !errors.emailErr  && !errors.usernameErr  && !errors. passwordErr  && !errors.confirmpasswordErr) {
      console.log(userForm);
    }
  };
  return (
    <div className="container py-5 border  mt-5 col-lg-4 col-md-3 col-sm-2 ">
      <h1 className="text-uppercase text-center mb-4" >registration form</h1>
      <form onSubmit={(e) => submitUserDataForm(e)}>
          {/* Name  */}
          <div className="mb-3">
            <label htmlFor="nameID" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.nameErr ? "border-danger" : ""
              }`}
              id="nameID"
              aria-describedby="name"
              value={userForm.name}
              onChange={(e) => changeData(e)}
              name="name"
            />
          <div id="name" className="form-text text-danger">
            {errors.nameErr}
          </div>
        </div>
          {/* Email Address  */}
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
            {/* Username  */}
          <div className="mb-3">
            <label htmlFor="usernameID" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.emailErr ? "border-danger" : ""
              }`}
              id="usernameID"
              aria-describedby="username"
              value={userForm.username}
              onChange={(e) => changeData(e)}
              name="username"
            />
          <div id="username" className="form-text text-danger">
            {errors.usernameErr}
          </div>
        </div>
        {/* Password  */}
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
            <div id="password" className="form-text text-danger">
              {errors.passwordErr}
            </div>
        </div>
         {/* Confirm Password  */}
        <div className="mb-3">
            <label htmlFor="confirmpasswordID" className="form-label">
                Confirm Password
            </label>
            <span className="icondev" >
            <input
                type={ passwordShow ? "text" : "password"}
                className={`form-control ${
                errors.confirmpasswordErr ? "border-danger" : ""
                }`}
                id="confirmpasswordID"
                aria-describedby="confirmpassword"
                value={userForm.confirmpassword}
                onChange={(e) => changeData(e)}
                name="confirmpassword"
            />
            </span>
            <div id="password" className="form-text text-danger">
              {errors.confirmpasswordErr}
            </div>
        </div>
       <Link to="/">
        <button
          type="submit"
          disabled={errors.nameErr || errors.emailErr || errors.usernameErr || errors.passwordErr|| errors.confirmpasswordErr }
          className="btn btn btn-success"
        >
          Register
        </button>
       </Link>
      </form>
    </div>
  );
}
