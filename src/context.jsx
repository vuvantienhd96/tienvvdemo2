import React, { Component } from 'react';

//import axios
import axios from 'axios';

const Context = React.createContext();


export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const GET_DETAIL_ID = 'GET_DETAIL_ID';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';



const reducer = (state, action) => {
    switch (action.type) {
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload.id
                ),
                loading: action.payload.loadingInternal
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            }
        case GET_DETAIL_ID: 
            return {
                ...state,
                ...state.contacts
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? (contact = action.payload) : contact
                    )
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
           
        ],
        dispatch: action => this.setState(state => reducer(state, action)),
        loading: false
    };

    async componentDidMount(){
        this.setState({loading: true})
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({loading: false});
        this.setState({contacts: res.data})
        // .then(res => {
        //     this.setState({loading: false})
        //     this.setState({ contacts: res.data });
        // })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
