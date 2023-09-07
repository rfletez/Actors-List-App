import React, { Component } from 'react';
import ActorsService from '../services/ActorsService';
import withNavigateHook from './withNavigateHook';

import ShowIDFromParam from './ShowIDFromParam';

export class UpdateActor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        //Binding the handler functions into the constructor
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateActor = this.updateActor.bind(this);
    }

    componentDidMount() {
        //getActorByID() returns a Promise, so use then()
        ActorsService.getActorByID(this.state.id).then((response) => {
            let actorObj = response.data;
            this.setState({ 
                firstName: actorObj.firstName,
                lastName: actorObj.lastName,
                emailId: actorObj.emailId
            });
        });

        //console.log("Param ID is: " + this.props.match.params.id);
    }

    updateActor = (event) => {
        event.preventDefault();

        let actorObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        }
        console.log("Actor details => " + JSON.stringify(actorObj));
        console.log("Path id: " + this.state.id);

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

    cancel() {
        this.props.navigation('/actors');
    }

    render() {
        return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>

                        <h3 className='text-center'>Update Actor</h3>
                        
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
                                
                                <button className='btn btn-success' onClick={this.updateActor}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}
export default withNavigateHook(UpdateActor);