import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { signup } from "../redux/features/authSlice";

const initialSate = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formvalue, setformvalue] = useState(initialSate);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { firstName, lastName, email, password, confirmPassword } = formvalue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("password should match");
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(signup({ formvalue, navigate }));
    }
  };

  const onInPutChange = (e) => {
    let { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  };
  const googleSuccess = () => {
    console.log();
  };
  const googleFailure = () => {};
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        aligncontent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard allignmet="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign Up</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate="row g-3">
            <div className="d-flex flex-nowrap">
              <div className="col-md-6">
                <MDBInput
                  label="First Name"
                  type="text"
                  value={firstName}
                  name="firstName"
                  onChange={onInPutChange}
                  required
                  invalid
                  validation="Provide First Name"
                ></MDBInput>
              </div>
              <div className="col-md-6">
                <MDBInput
                  label="Last Name"
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={onInPutChange}
                  required
                  invalid
                  validation="Provide Last Name"
                ></MDBInput>
              </div>
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInPutChange}
                required
                invalid
                validation="Provide Email"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInPutChange}
                required
                invalid
                validation="Provide Password"
              ></MDBInput>
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password Confirm"
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={onInPutChange}
                required
                invalid
                validation="Provide confirm password"
              ></MDBInput>
            </div>
            <div col-12>
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Register
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          <GoogleLogin
            clientId="..."
            render={(renderProps) => (
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon className="me-2" fab icon="google" />
                Google SignIn
              </MDBBtn>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an account? sing in</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Register;
