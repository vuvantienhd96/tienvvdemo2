import React, { Component } from 'react'

// uncontrolled Components & refs
export default class AddContact2 extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    
    onSubmit = (e) => {
        // ngăn chặn sự click user
        e.preventDefault();
        // khai bao object get value ref 
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        console.log('contact', contact);
    }

    static defaultProps = {
        name: 'tienvv dz',
        email: 'tienvv@gmail.com',
        phone: '666-555-444'
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={ this.onSubmit } >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text"
                                name="email" 
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text" 
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className="btn btn-light btn-block"
                            />
                    </form>
                </div>
            </div>
        )
    }
}
