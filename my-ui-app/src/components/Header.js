import React, { Component } from 'react'
import StartingPage from '../Login/StartingPage';
import { useNavigate } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <a href='/' className='navbar-brand'>List of Famous Actors</a>                            
                        </div>

                        <div className='ms-auto'>
                            <a className='btn btn-info' style={{marginRight:'10px'}} href='/login'>Login</a>
                            <a className='btn btn-info' href='/register'>Register</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

}