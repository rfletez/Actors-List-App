import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ActorsService from '../services/ActorsService';

import withNavigateHook from './withNavigateHook';

export class ListActorsComponent extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            actors: []
        }

        this.createActor = this.createActor.bind(this);
        this.updateActor = this.updateActor.bind(this);
    }


    componentDidMount() {
        //Best place to call REST APIs in this method.
        ActorsService.getActors().then((response) => {
            this.setState({ actors: response.data });
        });
    }

    createActor() {
        //This push() is not working, probably deprecated.
        //this.props.history.push('/create-actor');

        this.props.navigation('/create-actor');
    }

    updateActor(id) {
        //this.props.history.push(`/update-actor/${id}`);
        this.props.navigation(`/update-actor/${id}`);
    }

    render() {
        return (
        <div>
            <h2 className='text-center'>A-List Actors</h2>

            <div>
                <button className='btn btn-primary' onClick={this.createActor}>Create Actor</button>
            </div>

            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Actor's First Name</th>
                            <th>Actor's Last Name</th>
                            <th>Actor's Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.actors.map(actorObj => 
                                <tr key={actorObj.id}>
                                    <td>{actorObj.firstName}</td>
                                    <td>{actorObj.lastName}</td>
                                    <td>{actorObj.emailId}</td>
                                    <td> 
                                        
                                            <button 
                                                onClick={() => this.updateActor(actorObj.id)} 
                                                className='btn btn-info'>Update</button> 
                                        
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
        )
  }

}

export default withNavigateHook(ListActorsComponent);