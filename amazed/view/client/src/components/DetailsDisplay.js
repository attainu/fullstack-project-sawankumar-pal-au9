import React from 'react';
import Slider from 'react-slick';
import './DetailDisplay.css';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const DetailsDisplay = (props) => {
    const renderDetails = (data) => {
        const productData = (e) => {
            e.preventDefault();
            var userName = sessionStorage.getItem('userName');

            if (userName === '' || userName === undefined || userName === null) {
                sessionStorage.setItem('login', 'false');
            }
            sessionStorage.setItem('productData', JSON.stringify(data));
            props.history.push('/buynow');
        }

        const cartData = (e) => {
            e.preventDefault();
            var userName = sessionStorage.getItem('userName');

            if (userName === '' || userName === undefined || userName === null) {
                sessionStorage.setItem('clogin', 'false');
                sessionStorage.setItem('asin', props.match.params.id);
                props.history.push('/notSignedIn');
            }
            else {
                if(data){
                    props.addData(data);
                }
            }
        }

        if(data) {
            return (
                <React.Fragment>
                    <h2 className="detailTitle">{data.title}</h2>
                    <Slider {...settings}>
                        {
                            data.images.map((item, idx) => {
                                return (
                                    <div className="datailImage" key={idx}>
                                        <center>
                                            <img src={item} alt="detail-img"/>
                                        </center>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                    <hr/>
                    <div className="description">
                        <p><b>Current Price: </b>{data.price.symbol} <span className="price">{data.price.current_price}</span> &nbsp; &nbsp; <del>{data.price.symbol} {data.price.before_price}</del></p>

                        <p><b>Discount: </b>{data.price.symbol} <span className="price">{data.price.savings_amount}</span></p>
                        
                        <div>
                            <button onClick={cartData} className="btn btn-warning">Add To Cart</button>
                            &nbsp;
                            &nbsp;
                            <button onClick={productData} className="btn btn-warning">Buy Now</button>
                        </div><br/>
                        
                        <p><b>Description: </b>{data.description || 'None'}</p>
                        <p><b>Features:</b></p>
                        <ul>
                            {
                                data.feature_bullets.map((item, idx) => {
                                    return (<li key={idx}>{item}</li>)
                                })
                            }
                        </ul>
                    </div>
                </React.Fragment>
            );
        }
        else{
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
        <div className="container">
            {renderDetails(props.dData)}
        </div>
    );
}

export default DetailsDisplay;