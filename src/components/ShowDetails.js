import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ShowDetails extends Component {
    constructor(props){
        super(props);
            this.state = {
                postsDetails: []
            
        }
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>  {
               this.setState ({ 
                   postsDetails : response.data
               })
            })
            .catch(error => console.error(error))
    }

    render() {
        const { postsDetails } = this.state;
        
        console.log(postsDetails);
        return (
            <div>
                
                <h2> Details of Posts</h2>

                {postsDetails.length ? postsDetails.map( postsDetails => 
                    <div key={postsDetails.id}>
                        
                        <ListGroup >
                                <ListGroupItem tag="a" href={`https://jsonplaceholder.typicode.com/posts/${postsDetails.id}`} >
                                    {postsDetails.title}
                                </ListGroupItem>
                        </ListGroup>
                        
                    </div>
                ) : null}
                
            </div>
        )
    }
}

export default ShowDetails;