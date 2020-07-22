import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ linkInput, bodyInput, onLinkChange, onBodyChange, onSubmit, handleOptionChange }) => (
    // Need to add radio buttons here maybe?
    <form onSubmit={onSubmit}>
        <input type="text" value={linkInput} onLinkChange={onLinkChange}>URL</input>
        <input type="text" value={bodyInput} onBodyChange={onBodyChange}>JSON Body</input>
        <input type="radio" value="GET" name="route" onChange={handleOptionChange}/>
        <input type="radio" value="POST" name="route" onChange={handleOptionChange}/>
        <input type="radio" value="PUT" name="route" onChange={handleOptionChange}/>
        <input type="radio" value="DELETE" name="route" onChange={handleOptionChange}/>
    </form>
)

Form.propTypes = {
    linkInput: PropTypes.string.isRequired,
    onLinkChange: PropTypes.func.isRequired,
    onBodyChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    bodyInput: PropTypes.string.isRequired,
    handleOptionChange: PropTypes.func.isRequired
}

export default Form;
