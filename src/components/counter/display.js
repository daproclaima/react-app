import React from 'react';

import PropTypes from 'prop-types';

const Display = ({ count }) => (
  <div>
    <p>{count}</p>
  </div>
);

Display.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Display;
