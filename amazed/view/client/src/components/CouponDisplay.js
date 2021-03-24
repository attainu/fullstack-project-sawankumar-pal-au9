import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CouponDisplay = (props) => {
    const renderData = (item) => {
        return (
            <tr key={item._id}>
                <td>{item.createdDate}</td>
                <td>{item.couponName}</td>
                <td>{item.category}</td>
                <td>{item.discountPercent}</td>
                <td>{item.couponCode}</td>
                <td>{item.expiryDate}</td>
                <td>
                    <button
                        value={item._id}
                        style={{color:"red", outlineColor:"red"}}
                        onClick={props.delete}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    const renderEmpty = () => {
        return (
            <tr>
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
            </tr>
        );
    }

    const renderBody1 = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return renderData(item)
            })
        }else {
            return renderEmpty();
        }
    }

    const renderBody2 = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return renderData(item)
            })
        }else {
            return renderEmpty();
        }
    }

    const renderCategories = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return (
                    <option key={item._id} value={item.category}>
                        {item.category}
                    </option>
                )
            })
        }
    }

    const createCoupon = () => {
        sessionStorage.setItem('createCoupon', true);
        props.history.push('/create_coupon');
    }

    const renderSelect = () => {
        props.toggleTabs()
    }

    return (
        <React.Fragment>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 style={{display:"inline-block"}}>Coupons</h2>
                    <button style={{float:"right", margin:"15px auto"}} onClick={createCoupon} className="btn btn-success">Create Coupon</button>
                </div>
                <div className="panel-body">
                    <Tabs onSelect={renderSelect}>
                        <TabList>
                            <Tab style={{color:'red'}}>Active</Tab>
                            <Tab style={{color:'green'}}>Expired</Tab>
                        </TabList>

                        <TabPanel>
                            <div 
                                className="form-group" 
                                style={{fontSize:"16px"}}
                            >
                                <label htmlFor="couponfilter" className="col-md-offset-9 col-md-1">
                                    <i className="fa fa-filter"></i> Filter{" "}
                                </label>
                                <select className="col-md-2 filter" defaultValue={"default"} style={{display:"inline"}} onChange={props.Afilter}>
                                    <option value="default" disabled>Select Category</option>
                                    <option value="">All</option>
                                    { renderCategories(props.categories) }
                                </select>
                            </div>

                            <table className="table table-responsive">
                                <thead style={{background:"orange"}}>
                                    <tr>
                                        <th>Created On</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Discount (%)</th>
                                        <th>Coupon Code</th>
                                        <th>Expiry Date</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody style={{background:"#ecf3f9"}}>
                                    {renderBody1(props.ActiveCoupons)}
                                </tbody>
                            </table>
                        </TabPanel>

                        <TabPanel>
                            <div 
                                className="form-group" 
                                style={{fontSize:"16px"}}
                            >
                                <label htmlFor="couponfilter" className="col-md-offset-9 col-md-1">
                                    <i className="fa fa-filter"></i> Filter{" "}
                                </label>
                                <select className="col-md-2 filter" defaultValue={"default"} style={{display:"inline"}} onChange={props.Efilter}>
                                    <option value="default" disabled>Select Category</option>
                                    <option value="">All</option>
                                    { renderCategories(props.categories) }
                                </select>
                            </div>

                            <table className="table table-responsive">
                                <thead style={{background:"orange"}}>
                                    <tr>
                                        <th>Created On</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Discount (%)</th>
                                        <th>Coupon Code</th>
                                        <th>Expiry Date</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody style={{background:"#ecf3f9"}}>
                                    {renderBody2(props.ExpiredCoupons)}
                                </tbody>
                            </table>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CouponDisplay;