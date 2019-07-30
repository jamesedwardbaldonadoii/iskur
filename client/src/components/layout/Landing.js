import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <div className="col s4">
              <Link
                to="/register"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s4">
              <Link
                to=""
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Facebook Login
              </Link>
            </div>
            <div className="col s4">
              <Link
                to="/login"
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
