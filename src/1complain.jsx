import { useState } from "react";
import { Alert, Button , Form} from "react-bootstrap";

function Complain() {

    const [u_email,setu_email] =useState('')
    const [complain,setcomplain] =useState('')


    function login(){
        alert('Complain launched')
        {

    }}
    return ( <>

<center>
        <h1><b>Complaints</b></h1>


        <Form className='logdiv'>
        <Alert>
            <p>We will try to solve your isuue as soon as possible</p>
            </Alert>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" onChange={(id) => { setu_email(id.target.value) }} />
</Form.Group>


     <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" rows={4} placeholder="Enter Your complain" onChange={(x) => { setcomplain(x.target.value) }} />
    <label style={{fontSize:'15px', color:'red'}}>*   Feel free to launch a complain</label>
</Form.Group>


<center><Button className='loginbtn' onClick={()=>{login()}}>Log in</Button></center>

</Form>
</center>
    </> );
}

export default Complain;