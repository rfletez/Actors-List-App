import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function RegisterActorComponent() {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8086/api/v1/actors/", {
            first_name: firstName,
            last_name: lastName,
            email_id: email,
            password: password
          });

          //alert("User Registation Successfully");
          navigate('/actors');
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
                        <label>First name</label>
                        <input type="text"  class="form-control" id="first_name" 
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={(event) => {
                                setFirstname(event.target.value);
                            }}
                        />
                    </div>

                    <div class="form-group">
                        <label>Last name</label>
                        <input type="text"  class="form-control" id="last_name" 
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={(event) => {
                                setLastname(event.target.value);
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
export default RegisterActorComponent;