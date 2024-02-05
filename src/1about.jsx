
import imgf from './resources/img_f.jpg'
import imgu from './resources/img_u.jpg'
import crew from './resources/crew.jpg'
import imgr from './resources/jafar.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import NavB from './1navbar';
import Footer from './1footer';

function About() {
    const [remm, setremm] = useState('');
    return (<>

<h1 ><b>Know About Us</b></h1>
        
        <div className='maindiv'>
        <Card style={{
                // width: '80rem',
                width: '32%',
                // display:'-inline-flex',
                justifyContent: 'center', alignItems: 'center'
            }} className='about1'>
            
                <div style={{ width: '25rem' }}><Card.Img variant="top" src={imgf} style={{ borderRadius: '50px' }} /></div>
                <Card.Body>
                    <Card.Title><b>SM Faizan Akhter</b></Card.Title>
                    <Card.Text >
                        <p>Pakistan's Vehicles Controller Depertment <br />
                            <b>Vice Chancelor</b><br />
                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>


            <Card style={{
                // width: '80rem',
                width: '32%',
                // display:'-inline-flex',
                justifyContent: 'center', alignItems: 'center'
            }} className='about1'>
                <div style={{ width: '22rem' }}><Card.Img variant="top" src={imgr} style={{ borderRadius: '50px' }} /></div>
                <Card.Body>
                    <Card.Title><b>SM Jafar Akhter</b></Card.Title>
                    <Card.Text >
                        <p>Pakistan's Vehicles Controller Depertment <br />
                            <br />
                            <b>Administator</b> 
                                                   </p>
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card style={{
                // width: '80rem',
                width: '32%',
                // display:'-inline-flex',

                justifyContent: 'center', alignItems: 'center'
            }} className='about1'>
                <div style={{ width: '22rem' }}><Card.Img variant="top" src={imgu} style={{ borderRadius: '50px' }} /></div>
                {/* <Card.Body> */}
                    <Card.Title>
                    <br></br><b>Umair Ali</b></Card.Title>
                    <Card.Text >
                        <p>Pakistan's Vehicles Controller Depertment <br />
                            <b>Chairman</b><br />
                            </p>
                    </Card.Text>
                {/* </Card.Body> */}
            </Card>



           </div>





           <div>            <Card style={{width: '100%',margin:'0%',justifyContent: 'center', alignItems: 'center'}} className='about2'>
           <h1 style={{fontFamily:'sans-serif'}}>Meet our Crew Members</h1><center><div style={{ width: '90%' }}><Card.Img variant="top" src={crew} style={{ borderRadius: '50px' }} /></div></center>
                <Card.Body>
                    <Card.Title>
                    <br></br><b></b></Card.Title>
                    <Card.Text >
                        <h5><br /><b>Aarav ,Zainab ,Gabriel ,Anaya ,Amir ,Sophia ,Dev ,Aisha ,Michael ,Diya ,Omar ,Isabella ,Arjun </b><br /></h5>
                    </Card.Text>
                </Card.Body>
            </Card>
            
            </div>

    </>);
}

export default About;