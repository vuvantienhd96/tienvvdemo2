import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Consumer, ADD_CONTACT } from './../../context';
import TextInputGroup from './../layout/TextInputGroup'

//import axios
import axios from 'axios';


const REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_VALIDATE_PHONE = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

// controlerComponent
export default class AddContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }
    
    // onNameChange = (e) => this.setState({ name: e.target.value });
    // onEmailChange = (e) => this.setState({ email: e.target.value });
    // onPhoneChange = (e) => this.setState({ phone: e.target.value });
    onChange = e => {

        // const { name, email, phone } = this.state;
        this.setState({ [ e.target.name ] : e.target.value });
        // check for Errors
        // if(name === '') {
        //     this.setState({errors: { name: 'Name is required' }})
        //     return;
        // }
        // if(email === '') {
        //     this.setState({errors: { email: 'email is required' }})
        //     return;
        // }

        // if(!REGEX_VALIDATE_EMAIL.test(String(email).toLowerCase())){
        //     this.setState({errors: { email: 'email not match' }})
        //     return;
        // }
        // if(phone === '') {
        //     this.setState({errors: { phone: 'phone is required' }})
        //     return;
        // }
        // if(!REGEX_VALIDATE_PHONE.test(phone)){
        //     this.setState({errors: { phone: 'phone is not match' }})
        //     return;
        // }

        
    };

    onSubmit = async (dispatch, e) => {
        // ngăn chặn sự click user
        e.preventDefault();
        // get state đã được onchange
        const { name, email, phone } = this.state;

        // check for Erros
        if(name === '') {
            this.setState({errors: { name: 'Name is required' }})
            return;
        }
        if(email === '') {
            this.setState({errors: { email: 'email is required' }})
            return;
        }

        if(!REGEX_VALIDATE_EMAIL.test(String(email).toLowerCase())){
            this.setState({errors: { email: 'email not match' }})
            return;
        }
        if(phone === '') {
            this.setState({errors: { phone: 'phone is required' }})
            return;
        }
        if(!REGEX_VALIDATE_PHONE.test(phone)){
            this.setState({errors: { phone: 'phone is not match' }})
            return;
        }

        const newContact = {
            //  xóa đi bởi vì khi post lên server sẽ tư sinh ra id mới
            // id: uuidv4(),
            name,
            email,
            phone
        }

        try {
            let res = await axios.post
            ('https://jsonplaceholder.typicode.com/users', newContact)
            dispatch({ type: ADD_CONTACT, payload: res.data })
            // .then(res => dispatch({ type: ADD_CONTACT, payload: res.data }))
            // clear value has been pass into input
            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: {}
            })

            this.props.history.push('/');
        } catch (error) {
            throw new Error("you get error" + error);
        }

        // cachs viết ở trên giống với việc viết như ở dưới
        // const newContact = {
        //     name : name,
        //     email: email,
        //     phone: phone
        // }
        // dispatch({type: ADD_CONTACT, payload: newContact });

        // diều hướng user về trang chủ
        
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                    <div className="card mb-3">
                        <div className="card-header" style={{fontSize: '1.5rem'}}>Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={ this.onSubmit.bind(this, dispatch) } >
                                <TextInputGroup 
                                    type="text"
                                    name="name"
                                    plaholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                    label="Name"

                                />
                                <TextInputGroup 
                                    type="text"
                                    name="email"
                                    plaholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    label="Email"
                                />
                                <TextInputGroup 
                                    type="text"
                                    name="phone"
                                    plaholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                    label="Phone"
                                />
                                <input 
                                    type="submit" 
                                    value="Add Contact" 
                                    className="btn btn-light btn-block"
                                    />
                            </form>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        );
    }
}
