import PropTypes from 'prop-types';
import React from 'react';
import { HeroStyles } from './styles/HeroStyles';

const Hero = ({ img, title, max, children, blackColor }) => (
  <HeroStyles img={img} max={max} color={blackColor}>
    <h1>{title}</h1>
    {children}
  </HeroStyles>
);

Hero.propTypes = {
  children: PropTypes.array,
  img: PropTypes.string,
  max: PropTypes.bool,
  title: PropTypes.string,
  blackColor: PropTypes.any,
};

Hero.defaultProps = {
  img: '/bcg.jpg',
};

export default Hero;
