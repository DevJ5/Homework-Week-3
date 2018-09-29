import React from 'react';
import PropTypes from 'prop-types';

const ModelDetails = props => {
  return props.computers.map((computer, i) => (
    <ul key={i}>
      <li>Name: {computer.name}</li>
      <li>Manufacturer: {computer.manufacturer}</li>
      <li>Year: {computer.year}</li>
      <li>Origin: {computer.origin}</li>
    </ul>
  ));
};

ModelDetails.propTypes = {
  computers: PropTypes.array.isRequired
};

export default ModelDetails;
