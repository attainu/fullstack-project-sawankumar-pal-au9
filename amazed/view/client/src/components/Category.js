import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './Category.css';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    'images/Slider-Image1.jpg',
    'images/Slider-Image2.jpg',
    'images/Slider-Image3.jpg',
    'images/Slider-Image4.jpg'
  ];

const Category = (props) => {
    const renderDisplay = (data) => {
        if(data && data[0]) {
            return data.map((item) => {
                return (
                    <div className="categoryCard" key={item._id}>
                        <h3 className="cardTitle"><u>{item.category}</u></h3>
                        <img src={`${item.images[0]}`} alt="img1"/>
                        <img src={`${item.images[1]}`} alt="img2"/>
                        <img src={`${item.images[2]}`} alt="img3"/>
                        <img src={`${item.images[3]}`} alt="img4"/>
                        <div>
                            <Link to={`/search?category=${item.category}`} style={{textDecoration:'none'}}><h4 className="link">SEE MORE</h4></Link>
                        </div>
                    </div>
                );
            })
        }

        else {
            return (
                <div>
                    <center>
                        <img src="/images/loader.gif" alt="loader"/>
                    </center>
                </div>
            );
        }
    } 

    
    return (
        <React.Fragment>
            <div className="slide-container">
                <Slide>
                    <div>
                        <div className="sliderImage">
                            <img src={`${slideImages[0]}`} alt="slider-img-1"/>
                        </div>
                    </div>
                    <div>
                        <div className="sliderImage">
                            <img src={`${slideImages[1]}`} alt="slider-img-2"/>
                        </div>
                    </div>
                    <div>
                        <div className="sliderImage">
                            <img src={`${slideImages[2]}`} alt="slider-img-3"/>
                        </div>
                    </div>
                    <div>
                        <div className="sliderImage">
                            <img src={`${slideImages[3]}`} alt="slider-img-4"/>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* <hr/> */}

            <div className="container home-container">
                {/* <h2 className="homeTitle">Categories</h2> */}
                <center>
                    {renderDisplay(props.cData)}
                </center>
                <hr/>
            </div>
        </React.Fragment>
    );
}

export default Category;