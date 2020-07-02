import React, { Component } from 'react'
import NewMovieForm from './NewMovieForm'
import { connect } from 'react-redux';
import { onNewMovieSubmit }  from '../../actions/newMovie';


class NewMoviesPage extends Component {
    render() {
        return (
            <div>
                <NewMovieForm
                newMovie={this.props.newMovie}
                onNewMovieSubmit={this.props.onNewMovieSubmit}></NewMovieForm>
            </div>
        )
    }
}

const mapStateToProps = ({ newMovie }) => {
    return {
        newMovie
    }
};

const mapDispatchToProps = {
    onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviesPage);
