import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ responseInfo }) => (
  <section>
    <div>
      {JSON.stringify(responseInfo)}
    </div>
  </section>
);

Display.propTypes = {
  responseInfo: PropTypes.object.isRequired
};

export default Display;
