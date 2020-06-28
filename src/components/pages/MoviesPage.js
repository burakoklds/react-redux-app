import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList'

import { fetchMovies } from '../../actions/movies.js';

 class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                <h2>MoviesPage</h2>
                <MoviesList movies = { this.props.movies }></MoviesList>
            </div>
        );
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
};

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps , mapDispatchToProps) (MoviesPage);