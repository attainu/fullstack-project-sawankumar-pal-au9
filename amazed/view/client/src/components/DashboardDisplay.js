import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DashboardDisplay = (props) => {

    const renderDelivered = (status) => {
        if(status){
            return (<td style={{color:'green'}}>True</td>);
        }
        else{
            return (<td style={{color:'red'}}>False</td>);
        }
        
    }

    const changeStatus = (e) => {
        const bodyData = JSON.parse(e.target.value);

        if(!bodyData.delivered) {
            bodyData.delivered = true;
            bodyData.orderStatus = 'Product Delivered'
            fetch(`/orders/${bodyData.id}`,
            {method:'PATCH',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bodyData)
            })
            .then(res => res.json())
            .then(() => {
                props.uStatus();
            })
        }
        else{
            bodyData.delivered = false;
            bodyData.orderStatus = 'Order Placed';
            fetch(`/orders/${bodyData.id}`,
            {method:'PATCH',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bodyData)
            })
            .then(res => res.json())
            .then(() => {
                props.uStatus();
            })
        }
    }

    const renderFilterData = (item) => {
        return (
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.date}</td>
                <td>{`${item.orderDetails.firstName} ${item.orderDetails.lastName}`}</td>
                <td>{`${item.orderDetails.houseAddress}, ${item.orderDetails.apartment}, ${item.city}, ${item.orderDetails.state} ${item.orderDetails.postCode}`}</td>
                <td>{`${item.orderDetails.phone}/ ${item.orderDetails.email}`}</td>
                <td>{item.productDetails.quantity}</td>
                <td>{item.productDetails.grandTotal}</td>
                <td>{item.productDetails.productTitle}</td>
                <td>{item.productDetails.paymentMode}</td>
                <td><button onClick={changeStatus} className="btn btn-primary" value={JSON.stringify({id:item._id, delivered:item.delivered, orderStatus:item.orderStatus})}>
                        Change
                    </button>
                </td>
                {renderDelivered(item.delivered)}
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
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
                <td>N/D</td>
            </tr>
        );
    }

    const renderBody1 = (data) => {
        if(data.allOrders) {
            if(data.allOrders.length > 0) {
                const filterData = data.allOrders.filter((item) => {
                    return !item.delivered
                });

                if(filterData.length > 0){
                    return filterData.map((item) => {
                        return renderFilterData(item);
                    })
                }
                else{
                    return renderEmpty();
                }
            }
            else {
                return renderEmpty();
            }
        }
    }

    const renderBody2 = (data) => {     
        if(data.allOrders) {
            if(data.allOrders.length > 0) {
                const filterData = data.allOrders.filter((item) => {
                    return item.delivered
                });

                if(filterData.length > 0){
                    return filterData.map((item) => {
                        return renderFilterData(item);
                    })
                }
                else{
                    return renderEmpty();
                }
            }
            else {
                return renderEmpty();
            }
        }
    }

    const createAdmin = () => {
        sessionStorage.setItem('createAdmin', true);
        props.history.push('/signup');
    }

    return (
        <React.Fragment>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 style={{display:"inline-block"}}>Admin Dashboard</h2>
                    <button style={{float:"right", margin:"15px auto"}} onClick={createAdmin} className="btn btn-success">Create Admin</button>
                </div>
                <div className="panel-body">
                    <Tabs>
                        <TabList>
                        <Tab style={{color:'red'}}>Pending</Tab>
                        <Tab style={{color:'green'}}>Completed</Tab>
                        </TabList>

                        <TabPanel>
                            <table className="table table-responsive">
                                <thead style={{background:"orange"}}>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone/Email</th>
                                        <th>Qty.</th>
                                        <th>Amount</th>
                                        <th>Product</th>
                                        <th>Payment Mode</th>
                                        <th>Change Delivery Status</th>
                                        <th>Delivered</th>
                                    </tr>
                                </thead>

                                <tbody style={{background:"#ecf3f9"}}>
                                    {renderBody1(props.oData)}
                                </tbody>
                            </table>
                        </TabPanel>
                        
                        <TabPanel>
                            <table className="table table-responsive">
                                <thead style={{background:"orange"}}>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone/Email</th>
                                        <th>Qty.</th>
                                        <th>Amount</th>
                                        <th>Product</th>
                                        <th>Payment Mode</th>
                                        <th>Change Delivery Status</th>
                                        <th>Delivered</th>
                                    </tr>
                                </thead>

                                <tbody style={{background:"#ecf3f9"}}>
                                    {renderBody2(props.oData)}
                                </tbody>
                            </table>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DashboardDisplay;