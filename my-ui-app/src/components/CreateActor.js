import React, { Component } from 'react'
import ActorsService from '../services/ActorsService';


export default class CreateActor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }

        //Binding the handler functions into the constructor
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveActor = this.saveActor.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    saveActor = (event) => {
        event.preventDefault();

        let actorObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        }
        console.log("Actor details => " + JSON.stringify(actorObj));

        ActorsService.createActors(actorObj).then(response => {
            //this.props.history.push('http://localhost:3000/actor');
            //this.props.router.navigate('http://localhost:3000/actor');
        });
    }

    cancel() {
        this.props.history.push('/actors');
    }

    render() {
        return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>

                        <h3 className='text-center'>Add Actor</h3>
                        
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name...' name='firstName' 
                                        className='form-control' value={this.state.firstName} 
                                        onChange={this.changeFirstNameHandler}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Last Name</label>
                                    <input placeholder='Last Name...' name='lastName' 
                                        className='form-control' value={this.state.lastName} 
                                        onChange={this.changeLastNameHandler}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Email ID</label>
                                    <input placeholder='Email ID...' name='emailId' 
                                        className='form-control' value={this.state.emailId} 
                                        onChange={this.changeEmailIdHandler}
                                    />
                                </div>
                                
                                <button className='btn btn-success' onClick={this.saveActor}>Submit</button>
                                <a className='btn btn-danger' href='/' style={{ marginLeft: "10px" }}>Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}