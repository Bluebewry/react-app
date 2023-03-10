import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Nav extends Component {
    constructor(){
        super()
        this.state = {
            id: 1
        }
    }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/todo">To Do List</Link>

                        {this.props.user.apitoken? 
                        <>
                        <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log out</Link>
                        <p className='nav-link'>Hello, {this.props.user.username}</p>
                        </>:
                        <>
                        
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                        <Link className="nav-link" to="/login">Login</Link>

                        </>
                        }
    
                        <Link className="nav-link" href="#">{this.state.id}</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
}
