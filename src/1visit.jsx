import img_map from './resources/map.png'

function Visit() {
    return ( <>


<center><div className='contact mb-4'><br/><br/><h3>Visit Our office</h3><img src={img_map}></img><a href='https://www.google.com/maps/place/Sindh+Madrasa-tul-Islam+University,+City+Campus,+Karachi/@24.850837,67.003916,15z/data=!4m6!3m5!1s0x3eb33e03e02fabc1:0x96c129db3ee25a57!8m2!3d24.8508373!4d67.0039162!16zL20vMDhxbTgy?hl=en&entry=ttu'></a></div>
<br/>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2053.3290605798593!2d67.00437748126193!3d24.85039895143795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e03e02fabc1%3A0x96c129db3ee25a57!2sSindh%20Madrasa-tul-Islam%20University%2C%20City%20Campus%2C%20Karachi!5e0!3m2!1sen!2s!4v1703551164592!5m2!1sen!2s" style={{border:'0', width:'1080px' ,height:'720px' }}loading="lazy" ></iframe></center>

    </> );
}

export default Visit;