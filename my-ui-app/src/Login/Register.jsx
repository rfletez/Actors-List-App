import { React, useState } from "react";
import axios from "axios";

function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/users/save", {
            user_name: username,
            email: email,
            password: password,
          });
          alert("User Registation Successfully");
        } 
        catch (err) {
          alert(err);
        }
      }

    return(
        <div>
            <div class="container mt-4" >
            <div class="card">
                
                <h1>User Must Register Here</h1>
            
                <form>
                    <div class="form-group">
                        <label>User name</label>
                        <input type="text"  class="form-control" id="username" 
                            placeholder="Enter Name"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                    </div>

                    <div class="form-group">
                        <label>User email</label>
                        <input type="email"  class="form-control" id="email" 
                            placeholder="Enter Email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>

                    <div class="form-group">
                        <label>User password</label>
                        <input type="password"  class="form-control" id="password" 
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
                
                </form>
                </div>
            </div>
        </div>
    );
}

export default Register;