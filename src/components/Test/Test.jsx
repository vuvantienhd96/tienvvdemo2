import React, { Component } from 'react'

export default class Test extends Component {

    constructor(){
        super();
        console.log('this is contructor...');
        this.state = {
           post: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => 
            this.setState({
                post: json
            })    
        )
    }

    componentWillUnmount(){
        console.log('this is componentWillUnmount... 123');
    }

    componentDidUpdate(){
        console.log('this is componentDidUpdate...');
    }
    render() {
        const { post } = this.state;
        return (
            <div>
                {
                post.length >0 ? post.map((el, index) => 
                    <div key={el.userId} className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text">{el.body}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ): 'null'
                }
            </div>
        )
    }          
}
               

