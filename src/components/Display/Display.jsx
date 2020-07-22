import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ responseInfo }) => (
    <section>
        <div>
            {responseInfo}
        </div>
    </section>
)

Display.propTypes = {
    responseInfo: PropTypes.string.isRequired
}

export default Display;
