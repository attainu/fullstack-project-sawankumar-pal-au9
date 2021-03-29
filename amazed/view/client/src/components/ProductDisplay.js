import React from 'react';

const ProductDisplay = (props) => {
    
    const renderData = (item) => {
        return (
            <tr key={item._id}>
                <td>{item.asin}</td>
                <td>{item.product}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>₹{item.price.current_price}</td>
                <td>
                    <button
                        value={item._id}
                        style={{border: "2px solid black", color:"red", borderColor:"red", borderRadius:"5px"}}
                        onClick={props.delete}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    const renderBody = (data) => {
        if(props.category) {
            let [product, type] = props.category.split('/');
            data = data.filter(item => {
                return (item.product === product && item.type === type)
            })
        }else if(props.asin) {
            data = data.filter(item => {
                return (item.asin === props.asin)
            })
        }

        if(data && data.length > 0) {
            return data.map(item => {
                return renderData(item)
            })
        }
    }

    const renderCategories = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return (
                    <option key={item._id} value={`${item.product}/${item.type}`}>
                        {item.subCategory}
                    </option>
                )
            })
        }
    }

    const createProduct = () => {
        props.history.push('/create_product');
    }

    const renderTable = () => {
        if(props.products && props.products.length > 0) {

            return (
                <table className="table table-responsive">
                    <thead style={{background:"orange"}}>
                        <tr>
                            <th>Asin</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Department</th>
                            <th>Current Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody style={{background:"#ecf3f9"}}>
                        {renderBody(props.products)}
                    </tbody>
                </table>
            );
        }else {
            return (
                <center>
                    <img src="/images/loader.gif" alt="loader"/>
                </center>
            );
        }
    }

    const renderSearch = (e) => {
        e.preventDefault();
        let filter = document.getElementsByClassName('filter')[0];
        let asin = document.getElementById('asin').value;

        filter.selectedIndex = '0';
        props.searchAsin(asin);
    }

    const renderFilter = (e) => {
        let searchBar = document.getElementById('asin');
        searchBar.value = "";
        
        props.categoryChanged(e);
    }

    return (
        <React.Fragment>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 style={{display:"inline-block"}}>Products</h2>
                    <button style={{float:"right", margin:"15px auto"}} onClick={createProduct} className="btn btn-success">Create Product</button>
                </div>
                <div className="panel-body" style={{overflow: "scroll"}}>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group col-sm-7">
                                <input type="text" id="asin" className="form-control" 
                                    placeholder="Enter asin">
                                </input>
                            </div>

                            <button className="btn btn-warning col-sm-3" onClick={renderSearch}>
                                search
                            </button>
                        </div>

                        <div className="col-md-offset-4 col-sm-4">
                            <label style={{fontSize:"18px"}}>
                                <i className="fa fa-filter"></i> Filter
                            </label>

                            <div className="col-sm-8">
                                <select className="form-control filter" defaultValue={"default"} style={{display:"inline"}} onChange={renderFilter}>
                                    <option value="default" disabled>Select Category</option>
                                    <option value="">All</option>
                                    { renderCategories(props.categories) }
                                </select>
                            </div>
                        </div>
                    </div>

                    { renderTable() }
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductDisplay;