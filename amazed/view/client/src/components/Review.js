import './Review.css';

const Review = (props) => {
    const renderReviews = (data) => {
        if(data){
            if(data.reviews.length > 0){
                return data.reviews.map((item) => {
                    return (
                        <div className="reviews" key={item._id}>
                            <h3 className="reviewTitle">{item.name}</h3>
                            <p className="reviewDate">{item.date.date}</p>
                            <p><b>{item.title}</b></p>
                            <p>{item.review}</p>
                            <p><b>Rating -</b> {item.rating} out of 5</p>
                            <hr/>
                        </div>
                    );
                })
            }

            else{
                return (
                    <div>
                        <h3>No Reviews Yet</h3>
                    </div>
                )
            }
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
            <h2 className="reviewHeading">Top Reviews</h2>
            {renderReviews(props.rData)}
        </div>
    )
}

export default Review;