import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DashboardDisplay = (props) => {

    const renderDelivered = (status) => {
        if(status==='True'){
            return (<td style={{color:'green'}}>{status}</td>);
        }
        else{
            return (<td style={{color:'red'}}>{status}</td>);
        }
        
    }

    const changeStatus = (e) => {
        const bodyData = JSON.parse(e.target.value);

        if(bodyData.delivered === 'False') {
            bodyData.delivered = 'True';
            bodyData.status = 'Product Delivered'
            fetch(`http://localhost:8900/order/${bodyData.id}`,
            {method:'PUT',
            headers: {
                'Accepct':'application/json',
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
            bodyData.delivered = 'False';
            fetch(`http://localhost:8900/order/${bodyData.id}`,
            {method:'PUT',
            headers: {
                'Accepct':'application/json',
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
            <tr key={item.id}>
                <td>{`cf3fc8ac${item.id}`}</td>
                <td>{item.date}</td>
                <td>{`${item.fname} ${item.lname}`}</td>
                <td>{`${item.houseadd}, ${item.apartment}, ${item.city}, ${item.state} ${item.postCode}`}</td>
                <td>{`${item.phone}/ ${item.email}`}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>{item.productTitle}</td>
                <td>{item.payment}</td>
                <td><button onClick={changeStatus} className="btn btn-primary" value={JSON.stringify(item)}>Change</button></td>
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
                    return item.delivered === 'False'
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
                    return item.delivered === 'True'
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