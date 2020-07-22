import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ linkInput, bodyInput, onLinkChange, onBodyChange, onSubmit, handleOptionChange }) => (
    <>
    <form onSubmit={onSubmit}>
        <input type="text" value={linkInput} onLinkChange={onLinkChange} />
        <input type="text" value={bodyInput} onBodyChange={onBodyChange} />
        <input type="radio" value="GET" name="route" onChange={handleOptionChange}/>
        <input type="radio" value="POST" name="route" onChange={handleOptionChange}/>
        <input type="radio" value="PUT" name="route" onChange={handleOptionChange}/>
        <input type="radio" value="DELETE" name="route" onChange={handleOptionChange}/>
        <button>Submit</button>
    </form>
    </>
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
