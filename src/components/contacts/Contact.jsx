import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './contact.scss';

import { Consumer } from '../../context';
import { DELETE_CONTACT } from '../../context'

// import axios
import axios from 'axios'

// Router
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//icon antd
import { EditOutlined }  from '@ant-design/icons';

// uncontroler component là gì
export default class Contact extends Component {
    
    state ={
        showInfoItem: false,
        loadingInternal: false
    }

    onShowClick(id, e) {
        this.setState({ showInfoItem: !this.state.showInfoItem });
    }

    


    onDeleClick = async (id, dispatch, loading) => {
        // do something

        console.log('id', id);
        this.setState({loadingInternal: true})
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        this.setState({ loadingInternal: false })
        dispatch({ type: DELETE_CONTACT, payload: {id: id, loadingInternal: false}})
        // .then(res => {
        //     this.setState({loadingInternal: false})
        //     dispatch({type: DELETE_CONTACT, payload: {id: id, loadingInternal: false}})
        // })
        
    }

    render() {
        const { name, email, phone, id} = this.props.contact;
        const { showInfoItem, loadingInternal } = this.state;
        return (
            <React.Fragment>
            <Consumer>
                {value => {
                    const { dispatch, loading } = value;
                    return (
                        <React.Fragment>
                        {
                            loadingInternal && <div className="loader">loading</div>
                        }

                        {
                           
                           
                           !loadingInternal && (<div className="container-card card card-body mb-3">
                            
                                <h4>
                                    {name}
                                    <i onClick={this.onShowClick.bind(this, id)} 
                                                className="pl-2 pb-2 fas fa-sort-down custum-icon_sort"
                                    />
                                    <i onClick={() => this.setState({ showInfoItem: !this.state.showInfoItem })} 
                                                className="pl-2 pb-2 fas fa-plus custum-icon_plus"
                                    />

                                    <i onClick={this.onDeleClick.bind(this, id, dispatch, loading)} className="fas fa-times custum-icon_times" />
                                    <Link to={`/editcontact/${id}`} className="nav-link"><EditOutlined /></Link>
                                </h4>
                                {
                                    showInfoItem && 
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {email}</li>
                                        <li className="list-group-item">Number: {phone}</li>
                                        <li className="list-group-item"><Link to={`/detail/${id}`} className="nav-link">Click me !</Link></li>
                                    </ul>
                                }
                            </div>)
                        }
                        </React.Fragment>
                    )
                }}
            </Consumer>
            </React.Fragment>
            
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}