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
            ...this.state,
            page: 1,
            data: {SearchResult: filteredData}
        })
    }

    renderPrevBtn = (e) => {
        e.preventDefault();
        if(this.state.page > 1) {
            this.setState({
                ...this.state,
                page: this.state.page - 1
            })
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
        }
    }

    renderNextBtn = (e) => {
        e.preventDefault();
        let check = (this.state.page*15 + 1);
        if(check <= this.state.data.SearchResult.length) {
            this.setState({
                ...this.state,
                page: this.state.page + 1
            })
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
        }
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
                        page={this.state.page}
                        prev={this.renderPrevBtn}
                        next={this.renderNextBtn}
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