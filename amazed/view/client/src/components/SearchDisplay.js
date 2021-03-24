import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchDisplay.css';

const SearchDisplay = (props) => {
    const [page, setPage] = useState(1);
    const [propsData, setPropsData] = useState("");

    useEffect(() => {
        if(props.sData && props.sData.length > 0) {
            const data = props.sData.slice((page*15 - 15), page*15);
            setPropsData(data);
        }
        if(props.sData && props.sData.length === 0) {
            setPropsData([]);
        }
    }, [props.sData, page]);

    const renderSearch = (data) => {
        if(data){
            if(data.length > 0){
                return data.map((item) => {
                    return (
                        <div className="searchContainer" key={item._id}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <center>
                                        <img src={item.thumbnail} alt="product-img"/>
                                    </center>
                                </div>

                                <div className="col-sm-8">
                                    <Link to={`/detail/${item.asin}`} style={{textDecoration:'none'}}><h3 className="link">{item.title}</h3></Link>
                                    <div>
                                        <p><b style={{color:'orange'}}>Rating: </b><span className="rating">{item.reviews.rating} </span>out of 5</p>
                                    </div>
                                    <div>
                                        <p>Rs.<b className="amount">{item.price.current_price}</b>&nbsp; &nbsp;<del>Rs.{item.price.before_price}</del></p>
                                    </div>
                                    <div>
                                        <p>You Save Rs.<b className="amount">{item.price.savings_amount}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })

            }
            else{
                return (
                    <div className="noData">
                        <center>
                            <img src="/images/nodata.jpg" alt="nodata"></img>
                        </center>
                    </div>
                );
            }
        }
        else{
            return (
                <div className="loader">
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            );
        }
    }

    const renderPrevBtn = (e) => {
        e.preventDefault();
        if(page > 1) {
            setPage((prevPage) => prevPage - 1);
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
        }
    }

    const renderNextBtn = (e) => {
        e.preventDefault();
        let check = (page*15 + 1);
        if(check <= props.sData.length) {
            setPage((prevPage) => prevPage + 1);
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
        }
    }

    return (
        <>
            <div className="searchResult">
                {
                    renderSearch(propsData)
                }

                <div className="managePage">
                    { propsData && propsData.length > 0 &&
                        <>
                            <button onClick={renderPrevBtn}>{"<"} prev</button>
                            <p>-- Page {page} --</p>
                            <button onClick={renderNextBtn}>next {">"}</button>
                        </>
                    }               
                </div>
            </div>
        </>
    );
}

export default SearchDisplay;