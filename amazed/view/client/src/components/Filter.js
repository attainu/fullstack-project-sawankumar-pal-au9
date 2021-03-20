import './Filter.css';

const Filter = (props) => {

    const renderFilter = (e) => {
        const limit = e.target.value.split('-');
        if(props.sData.SearchResult && props.sData.SearchResult.length > 0){
            const filteredData = props.sData.SearchResult.filter((item) => {
                return limit[0] <= item.price.current_price && item.price.current_price <= limit[1]
            })
            
            props.fData(filteredData);
        }
    }

    const filterStyle = {
        background: "#ecf3f9",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "80%",
        boxShadow:"10px 10px 5px #ccc"
    }

    return (
        <div style={filterStyle} className="container">
            <div className="container">
                <h4 className="filterTitle">Select by Price</h4>
                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount" value="0-100000000"/> All</label>
                </div>
                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount" value="0-500"/> Under Rs.500</label>
                </div>

                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount" value="500-1000"/> Rs.500 - Rs.1000</label>
                </div>

                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount" value="1000-5000"/> Rs.1000 - Rs.5000</label>
                </div>

                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount"value="5000-10000"/> Rs.5000 - Rs.10000</label>
                </div>

                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount"value="10000-20000"/> Rs.10000 - Rs.20000</label>
                </div>

                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount"value="20000-50000"/> Rs.20000 - Rs.50000</label>
                </div>
                
                <div>
                    <label><input onClick={renderFilter} type="radio" name="amount"value="50000-1000000"/> Over Rs.50000</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;