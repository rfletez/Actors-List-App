import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import Login from './Login';
import Registration from './Registration';

function Home() {
    // state = {
    //     form: "loggingIn"
    // };

    const [logging, setLogging] = useState("");

    return(
        <React.Fragment>
            <div style={{
                display: 'center',
                backgroundColor: 'red'
            }}>
            <h1>Welcome User!</h1>
            </div>

            <div>
            {this.form === "login" ? <Login/> : <Registration/>}
        {this.form === "login" ? (
          <a
            href="register"
            onClick={() => this.setState((s) => ({ ...s, form: "register" }))}
          >
            Don't have an account ?
          </a>
        ) : (
            <a
            href="login"
            onClick={() => this.setState((s) => ({ ...s, form: "login" }))}
          >
            Already have an account ?
          </a>
        )}
            </div>
        </React.Fragment>
    );

}
export default Home;