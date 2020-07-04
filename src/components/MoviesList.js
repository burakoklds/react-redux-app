import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react';
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MoviesList = ({ movies , deleteMovie }) => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    );



    const moviesList = (
        <div>
            <PacmanLoader
          color={"#123abc"}
          loading={ movies.fetching }
          css={override}
        />
            {
                movies.error ? <h3>Error retrieving data! </h3> 
            :
            <Grid stackable columns={2}> 
             {
                 movies.movieList.map(movie => 
                 <MovieCard 
                 key={ movie._id } 
                 movie = { movie } 
                 deleteMovie={ deleteMovie } /> )
             }
            </Grid>
            }
        </div>
    );

    return (
        <div>
            { movies.length === 0 ? emptyMessage : moviesList }
        </div>
    )
}

MoviesList.propTypes = {
   movies: PropTypes.shape({
    movieList: PropTypes.array.isRequired
   }).isRequired
};

export default MoviesList;
