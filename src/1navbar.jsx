import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import img1 from "./resources/a.svg"
import Log from './1login';
import Sign from './1signup';
import NavBservice from './resources/subpages/1navservice';
import NavAbout from './resources/subpages/1navabout';
import NavContact from './1navcontact';
import NavComplain from './navcomplain';
import NavVisit from './navvisit';
import Carrer from './1carrer';
import NavCarrer from './navcarrer';
// import bg from './resources/bg.jpg;';
import bg from './resources/bkg.jpg'


function NavB() {

  function Login() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Log></Log>
      </React.StrictMode>
    );
  }
  function Signup() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Sign></Sign>
      </React.StrictMode>
    );
  }

  function service() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <NavBservice></NavBservice>
      </React.StrictMode>
    );
  }

  function Aboutt() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <NavAbout></NavAbout>        
      </React.StrictMode>
    );
  }
  function navcontact() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
  <NavContact></NavContact>
      </React.StrictMode>
    );}

    function complain(){
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
    <NavComplain></NavComplain>
        </React.StrictMode>
      ); }

      function navvisit(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
      <NavVisit></NavVisit>
          </React.StrictMode>
        );
      }

      function carrer(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
      <NavCarrer></NavCarrer>
          </React.StrictMode>
        );
      }

  return (<>

    <div >
    

      <Navbar expand="lg" className="d2">
        <Container fluid>
          <Navbar.Brand href="#"><img src={img1} className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', color: 'white' }}
            //  navbarScroll

            >

              <Nav.Link className='navlinks' href="http://localhost:3000"><h5><b>Home</b></h5></Nav.Link>
              <Nav.Link className='navlinks' onClick={() => { service() }}><h5><b>Services</b></h5></Nav.Link>
              <Nav.Link className='navlinks' onClick={() => {Aboutt()}}><h5><b>About</b></h5></Nav.Link>
              {/* <Nav.Link className='navlinks' href="#action2"><h5><b>About</b></h5></Nav.Link> */}
              <Nav.Link className='navlinks' href="https://ptv.com.pk/ptvNews" target={'_blank'}><h5><b>News</b></h5></Nav.Link>
              
              <Nav.Link className='navlinks' onClick={() => { navcontact()}}><h5><b>Contact</b></h5></Nav.Link>
              <Nav.Link className='navlinks' onClick={() => { complain()}}><h5><b>Complaint</b></h5></Nav.Link>
              <Nav.Link className='navlinks' onClick={() => { }}><h5><b>Achivements</b></h5></Nav.Link>
              <Nav.Link className='navlinks' onClick={() => { navvisit()}}><h5><b>Visit Us</b></h5></Nav.Link>
              <Nav.Link className='navlinks' onClick={() => { carrer()}}><h5><b>Carrer</b></h5></Nav.Link>
            </Nav>


            {/* <Form.Select style={{ backgroundColor: 'transparent', width: '100px', color: 'white', border: 'none' }}>
              <option value="0" className='color'><b>Services</b></option>
              <option value="1" className='color'>Verification</option>
              <option value="2" className='color'>Registration</option>
              <option value="3" className='color'>Transfer</option>
            </Form.Select> */}




            {/* <ButtonGroup variant="success"> */}
            {/* <button className="btn" onClick={()=>{Login()}}>Log In</button> */}
            <button className="btn" onClick={() => { Login() }}>Log In</button>
            <button className="btn" onClick={() => { Signup() }}>Sign Up</button>
            {/* </ButtonGroup> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='d22 navbar'>
        <h2
        //  style={{ margin: '0%' }}
         >Pakistan's Vehicles Controller Depertment <span>(Government of Pakistan)</span></h2>

        <h4
        //  style={{ margin: '0%' }}
         >(Federal, Sindh, Punjab, KPK, Balochistan, Gilgit Baltistan)</h4>
      </div>

    </div>
  </>);
}

export default NavB;