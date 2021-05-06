import React, { Component } from 'react';
import axios from 'axios';
import './LoginRegister.css';

export default class Register extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            middle_name: this.middleName,
            phone: this.phone,
            email: this.email,
            address: this.address,
            password: this.password,
            password_confirm: this.confirmPassword,
            farmer: this.farmer,
            investor: this.investor,
            consultant: this.consultant
        };

        axios.post('register', data).then(
            res => {
                this.setState( {
                    message: res.data.message
                })
                console.log(data)
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };
    
    render() {

        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }
       
        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="register-wrapper">
                    {error}

                    <h3 className="login-register-header">Register</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" 
                        id="firstname" 
                        placeholder='First Name' 
                        onChange={e => this.firstName = e.target.value} 
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" 
                        id="lastname" 
                        placeholder='Last Name'  
                        onChange={e => this.lastName = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Middle Name</label>
                        <input type="text" 
                        id="middlename"
                        placeholder='Middle Name' 
                        onChange={e => this.middleName = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" 
                        id="phone" 
                        placeholder='+234-703-567-1234' 
                        onChange={e => this.phone = e.target.value}
                        required/>
                    </div>
        
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" 
                        id="email" 
                        placeholder='circleafrica@gmail.com' 
                        onChange={e => this.email = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" 
                        id="address" 
                        placeholder='Your residential address'  
                        onChange={e => this.address = e.target.value}
                        required/>
                    </div>
        
                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' 
                        id='password' 
                        placeholder='Password' 
                        onChange={e => this.password = e.target.value}
                        required/>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type='password' 
                        id='passwordconfirm'
                        placeholder='Confirm Password' 
                        onChange={e => this.confirmPassword = e.target.value}
                        required/>
                    </div>
        
                    <div className="form-group radio-input-group">
                        <input className="farmer-radio" 
                        type="radio" 
                        onChange={e => this.farmer = e.target.value}
                        name="gender" /> Farmer
        
                        <input className="investor-radio" type="radio" 
                        onChange={e => this.investor = e.target.value} 
                        name="gender" /> Investor
        
                        <input className="consultant-radio" type="radio" 
                        onChange={e => this.consultant = e.target.value}
                        name="gender" /> Consultant
                    </div>
        
                    <div className="form-group">
                        <input type='submit' 
                        value='Create' 
                        className='submit' 
                        />
                    </div>
                </div>
            </form>
        )
    }
}
