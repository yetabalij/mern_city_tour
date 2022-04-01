import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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
import { login } from "../redux/features/authSlice";

const initialSate = {
  email: "",
  password: "",
};

const Login = () => {
  const [formvalue, setformvalue] = useState(initialSate);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  //console.log(error);
  const { email, password } = formvalue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formvalue, navigate }));
    }
  };

  const onInPutChange = (e) => {
    let { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  };

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
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate="row g-3">
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInPutChange}
                required
                invalid
                validation="Please Provide Your Email"
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
                validation="Please Provide Your Password"
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
                LogIn
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account? sing up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Login;
