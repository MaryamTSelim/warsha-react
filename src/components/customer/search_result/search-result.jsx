import React, { Component } from 'react';

import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";

import Nav from './../../core/nav/nav';
import SearchFilters from './search-filters';
import CenterCard from './center-card';
import Footer from './../../core/footer';
import Sort from '../../common/sort';
import { getFromStorage } from './../../../_utils/local-storage';

class SearchResult extends Component {
    state = {
        sortTypes: [
            { id: "defaultValue", name: "Sort Option" },
            { id: 1, name: 'A to Z' },
            { id: 2, name: 'Z to A' },
            { id: 3, name: 'Top Rated' },
            { id: 4, name: 'Less Waiting Time' }
        ],
        sortOption: '',
        centers: []
    };

    // set centers data
    componentDidMount(){
        this.setState({centers: this.props.centers});
    }

    // inputs value handler
    handleChange = ({ target }) => {
        const sortOption = target.value;
        this.setState({ sortOption });
    };

    // open center profile handler
    openCenterProfile = center => {
        const token = getFromStorage('authToken');
        if (token) {
            this.props.openCenterProfile(center);
            this.props.history.replace('/centerprofile');
        } else {
            toast("Join us to enable this feature", {type:"error"});
        }
    };

    handleBooking = data =>{
        this.props.handleBooking(data);
        this.props.history.replace("/confirmbooking");
    }

    render() {

        let sortedCenters = [];
        let searchedCenters = this.state.centers;
        if (this.state.sortOption === '1') {
            sortedCenters = _.orderBy(searchedCenters, 'centerName', 'asc');
        }
        else if (this.state.sortOption === '2') {
            sortedCenters = _.orderBy(searchedCenters, 'centerName', 'desc');

        }
        else if (this.state.sortOption === '3') {
            sortedCenters = _.orderBy(searchedCenters, 'totalRating', 'asc');
        }
        else if (this.state.sortOption === '4') {
            sortedCenters = _.orderBy(searchedCenters, 'waitingTime', 'asc');
        }
        else {
            sortedCenters = searchedCenters;
        }
        
        return (
            <React.Fragment>

                {/* Navbar */}
                <Nav className="white" />

                {/* Search Result Container */}
                <section className="searchR">
                    <div className="container row pt-5 m-auto">
                        {/* Filters Container */}
                        <SearchFilters />

                        {/* Centers Cards Container */}
                        <div className="col-9">
                            <div className="cards-container">
                                <div className="d-flex justify-content-between mb-3 mx-2">
                                    <h5>All Centers <span className="no-of--all-centers">/ {sortedCenters.length} Centers</span> </h5>
                                    {/* Sort Options Start */}
                                    <div>
                                        <Sort
                                            activeSort={this.state.sortOption}
                                            sortTypes={this.state.sortTypes}
                                            onSortChange={this.handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Centers Cards */}
                                {sortedCenters.map(center => (
                                    <CenterCard
                                        key={center.id}
                                        center={center}
                                        openCenterProfile={this.openCenterProfile}
                                        handleBooking={this.handleBooking}
                                    />
                                ))}
                            </div>
                            {/* Centers Cards Container End */}
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default SearchResult;