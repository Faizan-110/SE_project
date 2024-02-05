import React from 'react';
import ReactDOM from 'react-dom/client';
import Axios from 'axios';
import { Form, Row, Col } from 'react-bootstrap';
// import { Form, Col } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './1footer';
import NavB from './1navbar';
import { useState } from 'react';
import Address from './1address';
import NavBservice from './resources/subpages/1navservice';




function Sign(props) {

  const [u_id, setu_id] = useState('101');
  const [u_name, setu_name] = useState('');
  const [u_f_name, setu_f_name] = useState('');
  const [u_nic, setu_nic] = useState('');
  const [u_ph_no, setu_ph_no] = useState('');
  const [u_age, setu_age] = useState('');
  const [u_gender, setu_gender] = useState('');

  const [u_city, setu_city] = useState('');

  const [u_email, setu_email] = useState('');
  const [u_pswd, setu_pswd] = useState('');


  const provinces = ['Sindh', 'Punjab', 'Baluchistan', 'KPK', 'Other'];
  const cities = {
    Sindh: ['Karachi', 'Hyderabad', 'Jamshoro'],
    Punjab: ['Lahore', 'Multan', 'Bhawalpur'],
    Baluchistan: ['Hub', 'Gawadar', 'Queetta'],
    KPK: ['Peshawar', 'Abotabad', 'Sawat'],
    Other: ['Gilgit', 'Baltistan', 'Kashmir', 'Islamabad'],
  };

  // State to store selected values
  // const [u_city, setu_city] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Event handler for state selection
  const handleStateChange = (e) => {
    const stateValue = e.target.value;
    setu_city(stateValue);
    // setu_city(cityValue);
    // Reset selected city when state changes
    setSelectedCity('');
  };

  // Event handler for city selection
  const handleCityChange = (e) => {
    const cityValue = e.target.value;
    setSelectedCity(cityValue);
    // setSelectedCity(u_city);
  };

  function sign0() {
    alert("User Id:" + u_id)
    alert('User Name' + u_name)
    alert('Users Father Name' + u_f_name)
    alert('Phone Number' + u_ph_no)
    alert('User NIC NUMBER' + u_nic)
    alert('User Use Age' + u_age)
    alert('User Gender' + u_gender)
    alert('City' + u_city)

  }

  function sign() {

    let str1 = "insert into u_tbl(u_name,u_f_name,u_nic,u_ph_no,u_age,u_gender,u_city,u_email,u_pswd) values('"+u_name+"','"+u_f_name+"','"+u_nic+"','"+u_ph_no+"',"+u_age+","+u_gender+",'"+u_city+"','"+u_email+"','"+u_pswd+"');"
    Axios.post("http://localhost:3004/api/NonQuery", { mySQL: str1 }).then((res) => {
        setmsg(res.data)
        { alert(msg) }
        // console.log(msg)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
      <NavBservice></NavBservice>
          </React.StrictMode>
        )
    })   }

    const [msg, setmsg] = useState('ok')


  return (<>
<center>

<button onClick={()=>{alert(u_city)}}>checkbox</button>

    <NavB></NavB>

    <Form className='logdiv'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Name" onChange={(x) => { setu_name(x.target.value) }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Father's Name " onChange={(x) => { setu_f_name(x.target.value) }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter CNIC Number" onChange={(x) => { setu_nic(x.target.value) }} />
        <label>without gap </label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Phone Number" onChange={(x) => { setu_ph_no(x.target.value) }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Age" onChange={(x) => { setu_age(x.target.value) }} />
      </Form.Group>


      <div>
        <input type="radio" value="1" name="gender" onChange={(x) => { setu_gender(1) }} /> Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" value="0" name="gender" onChange={(x) => { setu_gender(0) }} /> Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" value="" name="gender" onChange={() => { setu_gender(10) }} /> Other
        {/* <input type="radio" value="Other" name="gender" onClick={()=>{<p>Transgender or Other</p>}}/> Other */}


      </div>

      {/* *********************************************Address********************************************* */}

      <br />
      <Form>
        {/* <h4>Address</h4> */}
        <Form.Group as={Row}>
          <Form.Label column htmlFor="stateDropdown">
            Select a State
          </Form.Label>
          <Col >
            <Form.Control
              as="select"
              id="stateDropdown"
              onChange={handleStateChange}
              value={u_city}
            >
              <option value="">Select State</option>
              {provinces.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>

        {u_city && (
          <Form.Group as={Row}>
            <Form.Label column htmlFor="cityDropdown">
              Select a City:
            </Form.Label>
            <Col>
              <Form.Control
                as="select"
                id="cityDropdown"
                onChange={handleCityChange}
                value={selectedCity}
              >
                <option value="">Select a city</option>
                {cities[u_city].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        )}
      </Form>
      <br />







      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" onChange={(x) => { setu_email(x.target.value) }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" onChange={(x) => { setu_pswd(x.target.value) }} />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"><Form.Check type="checkbox" label="Check me out" /></Form.Group> */}

      <center><Button className='loginbtn' onClick={() => { sign() }}>Sign Up</Button></center>

    </Form>
    <Footer></Footer>


</center>
  </>);
}

export default Sign;