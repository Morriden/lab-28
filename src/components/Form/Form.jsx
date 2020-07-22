import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ linkInput, onLinkChange, onBodyChange, onSubmit, bodyInput }) => (
    // Need to add radio buttons here maybe?
    <form onSubmit={onSubmit}>
        <input type="text" value={linkInput} onLinkChange={onLinkChange}>URL</input>
        <input type="text" value={bodyInput} onBodyChange={onBodyChange}>JSON Body</input>
    </form>
)

Form.propTypes = {
    linkInput: PropTypes.string.isRequired,
    onLinkChange: PropTypes.func.isRequired,
    onBodyChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    bodyInput: PropTypes.string.isRequired,
}

export default Form;
