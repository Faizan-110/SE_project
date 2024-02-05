import Footer from './1footer'
import img_fb from './resources/facebook.png'
import img_insta from './resources/insta.png'
import img_wtsp from './resources/wtsp.png'
import img_call from './resources/call.png'
import Visit from './1visit'
import NavB from './1navbar'




function NavContact() {


    return ( <>

<NavB></NavB>
        <center>

    <h1><b>Concact Us</b></h1>
<br/><br/>
<marquee><h3 className='contact' style={{display:'inline'}}>Visit us at : </h3><h2 style={{display:'inline'}}><a href="http://localhost:3000/"></a>GovtofPakistan.PVCD.com.pk</h2></marquee>

<div style={{display:'flex'}}>


<div className='contact mb-2'><a  href='+923112053788' target='blank'><img     src={img_call} className='img'></img></a><br/><br/><h3>Call us</h3></div>
<div className='contact mb-2'><a href='https://www.facebook.com/' target='blank'><img src={img_fb} className='img'></img></a><br/><br/><h3>Our Facebook Page</h3></div>
</div>


<div style={{display:'flex'}}>

<div className='contact mb-2'><a href='https://wa.me/<+923112053788>' target='blank'><img src={img_wtsp} className='img'></img></a><br/><br/><h3>Chat with Us</h3></div>
<div className='contact mb-2'><a href='https://www.Instagram.com/' target='blank'><img src={img_insta} className='img'></img></a><br/><br/><h3>Our Instagram profile</h3></div>


</div>




<Footer></Footer>
</center>
    </> );
}

export default NavContact;