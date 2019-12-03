import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

       <form method="post" action="http://localhost:9000/user" id="registerform">
     
             <div className="base-container" ref={this.props.containerRef}>
              <div className="header">Register</div>
              <div className="content">
                <div className="image">
                  <img src={loginImg} />
                </div>
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="username">nom</label>
                    <input type="text" name="first_name" placeholder="nom" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">prenom</label>
                    <input type="text" name="last_name" placeholder="prenom" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="password" />
                  </div>
                </div>
              </div>
              <div className="footer">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>
            </div>

       </form>
    );
  }
}
