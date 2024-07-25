import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './pictures/pic1.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';

class SliderComponent extends Component{
    render()
    {
        return(
            <div style={{height:'100px', width:'1000px'}}>
                <Carousel>
                  <Carousel.Item>
                    <img
                       className="d-block w-100"
                       src={pic1}
                       alt="first slide"
                    />
                    <Carousel.Caption>
                      <h3>First Slide Label</h3>
                      <p>PURPLE</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                       className="d-block w-100"
                       src={pic2}
                       alt="second slide"
                    />
                    <Carousel.Caption>
                      <h3>Second Slide Label</h3>
                      <p>PURPLE</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                       className="d-block w-100"
                       src={pic3}
                       alt="third slide"
                    />
                    <Carousel.Caption>
                      <h3>Third Slide Label</h3>
                      <p>PURPLE</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default SliderComponent;