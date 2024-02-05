import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavB from "./1navbar";
import Carosel from './1carosel';
import Footer from './1footer';
import Log from './1login';
import Service from './1services';
import Verify from './.verification';
import About from './1about';
import Complain from './1complain';
import Contact from './1contactus';
import Carrer from './1carrer';
import Transfer from './1transfer';
// import Slider from './slider';
function Main_page() {

   return (<>
        <div>
        <center>
{/* 
        <Log></Log>
        <Verify></Verify> */}
        

        {/* <Transfer></Transfer> */}

                <NavB></NavB><br></br>
                <Carosel></Carosel>
                <Service></Service>
                <About></About>
                <Contact></Contact>
                <Carrer></Carrer>
                <Complain id='complain'></Complain>
                <Footer></Footer>
</center>



        </div>
    </>);
}
export default Main_page;