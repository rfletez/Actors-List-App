import React, { Component } from 'react'
import ActorsService from '../services/ActorsService';

export default class ListActorsComponent extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            actors: []
        }

        this.createActor = this.createActor.bind(this);
    }


    componentDidMount() {
        //Best place to call REST APIs in this method.
        ActorsService.getActors().then((response) => {
            this.setState({ actors: response.data });
        });
    }

    createActor() {
        this.props.history.push('/create-actor');
    }

    render() {
    return (
      <div>
        <h2 className='text-center'>A-List Actors</h2>

        <div className='row'>
            <button className='btn btn-primary' onClick={this.createActor()}>Create Actor</button>
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