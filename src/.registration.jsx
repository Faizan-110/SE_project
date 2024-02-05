import ReactDOM from 'react-dom/client';
import React from 'react';
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Footer from "./1footer";
import NavB from "./1navbar";
import Axios from 'axios';
import NavBservice from './resources/subpages/1navservice';

function Registration() {

    const [u_name,setu_name] =useState ([])

    const [vtype, setvtype] = useState('')
    const [vame, setvname] = useState('')
    const [vbrand, setvbrand] = useState('')
    const [vcolor, setvcolor] = useState('White')

    const [vmodel, setvmodel] = useState('')
    // D=date_of_purchase
    const [D_purchase, setD_purchase] = useState('')
    const [vengine_no, setvengine_no] = useState('')
    const [vchases_no, setvchases_no] = useState('')
    const [vcomment, setvcomment] = useState('')
    const [u_nic, setu_nic] = useState('')
    

    const currentYear = new Date().getFullYear();
    const startYear = 1890;
    const endYear = 2023;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }
    //   const [vmodel, setvmodel] = useState(currentYear);

    const handleChange = (e) => {
        setvmodel(parseInt(e.target.value, 10));


        // if (/^\d{4000}$/.test(value)) {
        //     setError('');
        //   } else {
        //     setError('Input must be exactly 13 digits');
        //   }

    };

    const [msg, setmsg] = useState('ok')

    // ***********************************Button************************************ 

    // ***********************************Verify************************************ 

    function verifyy() {

        // alert('ok')
        let str3 ="SELECT u_name FROM u_tbl WHERE u_nic = '"+u_nic+"' ";
        Axios.get("http://localhost:3004/api/DataQuery", { params: { sql: str3 } }).then(
            (res) => {
                if(res.data.length > 0){
                //  setu_name(res.data);
                // setu_name('error')
                    alert("Verified")
                    
                }
                else{
                    alert("Not Verified")
                 }
            }
             );

//    alert(u_name)

    }

    // ***********************************Registrartion************************************ 
    function Registerbtn() {

        let str1 = "insert into v_tbl (v_type ,v_name ,v_brand ,v_vcolor ,v_model ,v_date_of_purchase ,v_engine_no ,v_chases_no ,v_comment ,v_u_nic,reg_number)values('"+vtype+"' ,'"+vame+"' ,'"+vbrand+"' ,'"+vcolor+"' ,'"+vmodel+"' ,'"+D_purchase+"' ,'"+vengine_no+"' ,'"+vchases_no+"' ,'"+vcomment+"' ,'"+u_nic+"','"+reg_numbers+"');"
                        Axios.post("http://localhost:3004/api/NonQuery", { mySQL: str1 }).then((res) => {
                            setmsg(res.data)
                            { alert(msg) }
                            {alert(reg_numbers)}
                            if(res= !null)
                            {
                                const root = ReactDOM.createRoot(document.getElementById('root'));
                                root.render(
                                <React.StrictMode>
                                  <NavBservice></NavBservice>
                                </React.StrictMode>
                                );
                            }



                        })  }


                        const getRandomLetters = function(count) {
                            let acc = '';
                            //  Math.floor(Math.random() * (91 + 65))+ 65 ; // the resulting string (to return once results appended)
                            for(let i = 0; i < count; i++) { // generate amount
                              const randomCharCode = Math.floor(Math.random() * (91 - 65))+ 65 
                              acc += String.fromCharCode(randomCharCode);
                            }
                            return acc;
                          }
                        const getRandomNumbers = function(count) {
                            let acc = '';
                            //  Math.floor(Math.random() * (91 + 65))+ 65 ; // the resulting string (to return once results appended)
                            for(let i = 0; i < count; i++) { // generate amount
                              const randomNumber = Math.floor(Math.random() * 10);
                              acc += randomNumber.toString();
                            }
                            return acc;
                          }
                          const reg_numbers = getRandomLetters(3) + '-'+ getRandomNumbers(3)
                        //   const [reg_number,setreg_number]= useState(characters)

                        // alert(characters)

                        // alert(reg_numbers)

    return (<>

       <center>


<NavB></NavB>
        <Form className='logdiv'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="radio" value="2 Wheeler" name="gender" onChange={(x) => { setvtype(x.target.value) }} />Two Wheeler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="4 Wheeler" name="gender" onChange={(x) => { setvtype(x.target.value) }} /> Four Wheeler
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Vehicle Name" onChange={(x) => { setvname(x.target.value) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Brand Name" onChange={(x) => { setvbrand(x.target.value) }} />
            </Form.Group>

            <Form.Select className="mb-3" onChange={(x) => { setvcolor(x.target.value) }} >

                <option>Select Vehicle Color</option>
                <option value="Red" >Red</option>
                <option value="Blue" >Blue</option>
                <option value="Black" >Black</option>
                <option value="White" >White</option>
                <option value="Grey" >Grey</option>
                <option value="Golden" >Golden</option>
                <option value="Other" >Other</option>

            </Form.Select>

            {/* <>{vcolor,vmodel,D_purchase}</> */}

            <Form.Label className="mb-3" style={{float:'left'}}>Select Model Year:</Form.Label>
            <Form.Control as="select" value={vmodel} className="mb-3" onChange={handleChange}>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </Form.Control>

            <Form.Label className="mb-3" style={{float:'left'}}>Date of Purchase</Form.Label>
            <Form.Control type="date" className="mb-3" onChange={(x) => { setD_purchase(x.target.value) }} >
            </Form.Control>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Engine Number" onChange={(x) => {
                    setvengine_no(x.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Chasses Number" onChange={(x) => {
                    setvchases_no(x.target.value)
                }} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="ta" rows={4} type="text" placeholder="Comment" onChange={(x) => { setvcomment(x.target.value) }} />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control as="textarea" placeholder="Comment" onChange={(x) => { setvcomment(x.target.value) }} />
            </Form.Group>

            {/* enter email to check if user is already registered or not */}

            <Form.Group className="mb-2" style={{ display: 'flex' }} controlId="formBasicEmail">
                <Form.Control style={{ width: '80%' }} type="text" placeholder="Enter your CNIC Number" onChange={(x) => {
                    setu_nic(x.target.value)
                    //             if (/^\d{13}$/.test(value)) {
                    //   setError('');
                    // } else {
                    //   setError('Input must be exactly 13 digits');
                    // }
                }} />
                <Button className="loginbtn" style={{ width: '20%' }} onClick={() => { verifyy() }}>Verify</Button>
                {/* <center><Button className="mb-3" onClick={()=>{verifyy()}}>Register Now</Button></center> */}
            </Form.Group>




            <center><Button className="mb-3 loginbtn" onClick={() => { Registerbtn() }}>Register Now</Button></center>

        </Form>
        <Footer></Footer>
</center>
        {/* <Footer></Footer> */}
    </>);
}

export default Registration;