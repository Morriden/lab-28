import React from 'react';
import PropTypes from 'prop-types';

const List = ({ lists }) => {
    const listElements = lists.map(list => (
        <li key={list}>
            {list}
        </li>
    ));

    return (
        <ul>
            {listElements}
        </ul>
    );
};

List.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;