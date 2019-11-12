import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {isEmpty} from "lodash";


class ShowDetails extends Component {
    constructor(props){
        super(props);
            this.state = {
                postsDetails: [],
                titleDetails: []
            
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

    clickEvent(id) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>  {
           this.setState ({ 
               titleDetails : [response.data]
           })
        })
        .catch(error => console.error(error))
    }
    render() {
        const { postsDetails, titleDetails } = this.state;
        
        console.log(postsDetails);
        console.log(titleDetails);
        return (
            <div>
                
                <h2> Details of Posts</h2>

                {postsDetails.length ? postsDetails.map( postsDetails => 
                    <div key={postsDetails.id}>
                        
                        <ListGroup >
                                <ListGroupItem onClick = {() => this.clickEvent(postsDetails.id)}>
                                   {postsDetails.title}  <br/>
                                   <b>{titleDetails.length && (postsDetails.id === titleDetails[0].id) ? JSON.stringify(titleDetails[0]) : null}</b>
                                </ListGroupItem>
                               

                        </ListGroup>
                        
                    </div>
                ) : null}
                
            </div>
        )
    }
}

export default ShowDetails;