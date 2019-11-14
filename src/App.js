import React from 'react';
import './App.css';
import ShowDetails from './components/ShowDetails';
import {Container, Row, Col} from 'reactstrap';
import {Navbar, Nav} from 'react-bootstrap';
import image1 from './download.jpeg';
import image2 from './image2.jpeg';
import {FiChevronRight} from 'react-icons/fi';

function App() {
  return (
    <div className="App">
      
        {/* <ShowDetails /> */}

        {/* <div class="wrapper">
            <header class="header">Header</header>
            <article class="main">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
            </article>
            <aside class="aside aside-1">Aside 1</aside>
            <aside class="aside aside-2">Aside 2</aside>
            <footer class="footer">Footer</footer>
        </div> */}
        <Navbar bg="dark" variant="dark" expand="lg md">
        <Navbar.Brand href="#home">PSD Websites</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="mr-auto">
            <Nav.Link href="#home">UI Kits </Nav.Link>
            <Nav.Link href="#features">Premiuim PSD files</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
 

        <Container className="container" >
        <Row className="row1">
              <Col >Awesome free PSD <br/>
              templates and Resources <br/>
              www.BlazRobar.com 

              </Col>
              
            </Row>
            <Row className="row2" noGutters={false}>
              <Col xs={8} >I am like the Robin Hood of PSD files.</Col>
              <Col className="row2col2"><FiChevronRight className="chevron-style"/></Col>
              
            </Row>
            <Row className="row3" noGutters={false}>
              <Col md={4}sm={12} className="text-align-center" ><FiChevronRight className="chevron-style"/>
              </Col>
              <Col  md={4}sm={12}><img src={image1}/></Col>
              <Col  md={4}sm={12}><img src={image2}/></Col>
              
            </Row>
            <Row className="row4" noGutters={false}>
            < Col className="aside">
              <div className="inline-block">quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ration <br/><br/>
                  quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ration
                  
              </div>
                <div className="inline-block">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus. <br/><br/>
                quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ration
              </div>

              
            </Col>
              
            </Row>
        </Container>
      
    </div>
  );
}

export default App;
