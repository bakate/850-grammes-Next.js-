import PropTypes from 'prop-types';
import React from 'react';
import TitleStyles from './styles/TitleStyles';

const Title = ({ bgTitle, center, title, withRow }) => (
  <TitleStyles centerTitle={center} hr={withRow}>
    <div>
      <h1>{bgTitle}</h1>
      <h2>{title}</h2>
      <hr />
    </div>
  </TitleStyles>
);

Title.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string,
  withRow: PropTypes.bool,
  bgTitle: PropTypes.string,
};

export default Title;
