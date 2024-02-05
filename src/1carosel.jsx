
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

import car1 from './resources/c1.png';
import car2 from './resources/c2.png';
function Carosel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (  <>
<Marquee className="marque"><img src={car1} style={{marginLeft:'7px'}}/>   <img src={car2}  style={{marginLeft:'7px'}}/></Marquee>
{/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={car1}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car2}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car1}></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}














</>);
}

export default Carosel;