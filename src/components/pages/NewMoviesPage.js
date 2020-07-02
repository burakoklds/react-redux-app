import React, { Component } from 'react'
import NewMovieForm from './NewMovieForm'
import { connect } from 'react-redux';


 class NewMoviesPage extends Component {
    constructor(props) {
    	super(props)
        console.log(props);
    }

    render() {
        return (
            <div>
                <NewMovieForm></NewMovieForm>
            </div>
        )
    }
}

const mapStateToProps = ({ newMovie }) => {
return {
    newMovie
}
};

export default connect(mapStateToProps, null) (NewMoviesPage) ;
