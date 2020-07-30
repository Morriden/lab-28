import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ linkInput, bodyInput, onLinkChange, onBodyChange, onSubmit, handleOptionChange, method }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={linkInput} onChange={onLinkChange} />
    <input type="text" value={bodyInput} onChange={onBodyChange} />
    <input type="radio" value="GET" name="route" onChange={handleOptionChange} checked={method === 'GET'}/>
    <input type="radio" value="POST" name="route" onChange={handleOptionChange} checked={method === 'POST'}/>
    <input type="radio" value="PUT" name="route" onChange={handleOptionChange} checked={method === 'PUT'}/>
    <input type="radio" value="DELETE" name="route" onChange={handleOptionChange} checked={method === 'DELETE'}/>
    <button>Submit</button>
  </form>
);

Form.propTypes = {
  linkInput: PropTypes.string.isRequired,
  onLinkChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  bodyInput: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired
};

export default Form;
