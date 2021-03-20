import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Admin } from '../actions/actionfile';
import DashboardDisplay from '../components/DashboardDisplay';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(Admin())
    }

    updateStatus = () => {
        this.props.dispatch(Admin())
    }

    render() {
        return (
            <div className="container" style={{overflowX:"auto"}}>
                <DashboardDisplay 
                oData={ this.props.orders } 
                uStatus={() => {this.updateStatus()}}
                history={this.props.history}
                />
            </div>
        );
    }
}

Dashboard.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        orders: state.order
    }
}

export default connect(mapStateToProps)(Dashboard);