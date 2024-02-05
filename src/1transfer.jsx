import { Form,Button } from "react-bootstrap";
import Footer from "./1footer";
import NavB from "./1navbar";
import { useState } from "react";
import Axios from 'axios';


function Transfer() {

    const[u_nic1,setu_nic1]  = useState('')
    const[reg_number,setreg_number]  = useState('')
    const[u_name,setu_name]  = useState('')
    const [msg,setmsg] = useState('')

return ( <>

<NavB></NavB>

<center><div style={{height:'100px',marginTop:'5%', color:'red'}}>

<p> We are really Sorry! this service maybe not avaialbe right now</p>



</div></center>

<div style={{margin:'5%'}}>

<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<label>"Transfer from"</label>
                <Form.Control type="text" placeholder="User Name" onChange={(x) => {
                    setu_nic1(x.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>"Registration Number"</label>
                <Form.Control type="text" placeholder="Vehicle Number" onChange={(x) => {
                    setu_nic1(x.target.value)
                }} />
            </Form.Group>

            <Button variant="success"  onClick={() => {
                        let str2 = " update u_tbl set u_name= '"+u_name+"',u_nic='"+u_nic1+"' where reg_number ='"+reg_number+"' "
                        Axios.post("http://localhost:3004/api/NonQuery", { mySQL: str2 }).then((res) => {
                            setmsg(res.data)
                            { alert(msg) }
                        })
                    }}>Update</Button>

</Form>

</div>



<Footer></Footer>

    </> );
}

export default Transfer;
