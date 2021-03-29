import React from 'react';
import Filter from '../components/Filter';
import SearchDisplay from '../components/SearchDisplay';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { search } from '../actions/actionfile';


class Search extends React.Component {
    constructor(){
        super()

        this.state = {
            page: 1,
            queryParam: "",
            data: { SearchResult: null }
        }
    }

    componentDidMount() {
        const query_arr = this.props.location.search;
        this.props.dispatch(search(`${query_arr}`));
        this.setState({
            queryParam: this.props.location.search
        })
    }

    componentDidUpdate() {
        if(this.state.queryParam !== this.props.location.search){
            const query_arr = this.props.location.search;
            console.log(query_arr)
            this.props.dispatch(search(`${query_arr}`));
            this.setState({
                queryParam: this.props.location.search,
                data: { SearchResult: null }
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.searchData
        })
    }

    filter = (filteredData) => {
        this.setState({
            data: {SearchResult: filteredData}
        })
    }


    render() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return (
            <div className="mainSearch">
                <div className="mainFilter">
                    <Filter 
                        fData={(filteredData) => {this.filter(filteredData)}} 
                        sData={this.props.searchData}
                    />
                </div>

                <div className="subMainSearch">
                    <SearchDisplay 
                        sData={this.state.data.SearchResult}
                    />
                </div>
            </div>
        );
    }
}

Search.prototypes = {
    dispatch: propTypes.func
}

const mapStateToProps = (state) => {
    return {
        searchData: state.search
    }
}

export default connect(mapStateToProps)(Search);