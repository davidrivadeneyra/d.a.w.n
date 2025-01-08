import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ 
  href = "#", 
  imgSrc = "/brand/discord-logo.svg", 
  imgAlt = "Icon", 
  className = "", 
  imgClassName = "h-4" 
}) => {
  return (
    <a 
      href={href} 
      className={`btn-icon btn-secondary ${className}`}
    >
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        className={imgClassName}
      />
    </a>
  );
};

IconButton.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  className: PropTypes.string,
  imgClassName: PropTypes.string
};

export default IconButton;