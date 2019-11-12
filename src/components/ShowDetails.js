import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem, Table } from 'reactstrap';

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
        
        return (
            <div>
                
                <h2> Details of Posts</h2>

                {postsDetails.length ? postsDetails.map( postsDetails => 
                    <div key={postsDetails.id}>
                        
                        <ListGroup >
                                <ListGroupItem onClick = {() => this.clickEvent(postsDetails.id)}>
                                  <b>{postsDetails.title}  </b> <br/>
                                  
                                   {titleDetails.length && (postsDetails.id === titleDetails[0].id) ? 
                      
                                   <Table dark striped bordered hover>  
                                        <thead>
                                            <tr>
                                                <th>UserId</th>
                                                <th>Id</th>
                                                <th>Title </th>
                                                <th>Body </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{ titleDetails[0].userId} </td>
                                                <td>{ titleDetails[0].id} </td>
                                                <td>{ titleDetails[0].title} </td>
                                                <td>{ titleDetails[0].body} </td>
                                            </tr>
                                           
                                        </tbody>
                                    </Table> 
                                    : null}
                                    
                                </ListGroupItem>
                        </ListGroup>
                        
                    </div>
                ) : null}
                
            </div>
        )
    }
}

export default ShowDetails;