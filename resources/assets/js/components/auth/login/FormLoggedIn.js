import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class FormLoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.logout = this.logout.bind(this);
    }
    logout() {
        axios.get('/api/logout').then(res => {
            this.props.logoutSuccess();
        }).catch(error =>{
            console.log(error);
        })
    }
    render() {
        const btnHomeStyle = {
            marginTop: '30px',
            marginRight: '10px',
            marginLeft: '10px',
        };
        const btnLogoutStyle = {
            marginTop: '30px',
            marginLeft: '10px',
            marginRight: '10px',
        };
          
        return (
            <div>
                <a href="/">
                {/* <Link to={'/home'}> */}
                    <button style={btnHomeStyle} className="btn btn-color btn-md pull-right  ">
                        Home
                    </button>
                {/* </Link> */}
                </a>
                <a href="/login">
                    <button onClick={this.logout} style={btnLogoutStyle} className="btn btn-color btn-md pull-right">
                        Logout
                    </button>
                </a>
            </div>
        )
    }
}
