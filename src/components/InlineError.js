import React from 'react'
import PropTypes from 'prop-types'

const inlineError = props => {
    return (
        <div className="inlineError">
            { props.message }
        </div>
    )
}

inlineError.propTypes = {
    message: PropTypes.string.isRequired
};

export default inlineError;
