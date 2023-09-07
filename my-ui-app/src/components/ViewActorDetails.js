import React, { Component } from 'react';
import ActorsService from '../services/ActorsService';

class ViewActorDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            actor: {}
        };
    }

    componentDidMount() {
        ActorsService.getActorByID(this.state.id).then( response => {
            this.setState({
                actor: response.data
            })
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Actor's Details</h3>

                    <div className='card-body'>
                        <div className='row'>
                            <label>First Name: </label>
                            <div>{ this.state.actor.firstName }</div>
                        </div>
                        <div className='row'>
                            <label>Last Name: </label>
                            <div>{ this.state.actor.lastName }</div>
                        </div>
                        <div className='row'>
                            <label>Actor's Email: </label>
                            <div>{ this.state.actor.emailId }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewActorDetails;