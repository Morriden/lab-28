import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => {
  const itemElements = items.map(item => (
    <li key={item}>
      {item}
    </li>
  ));

  return (
    <ul>
      {itemElements}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
