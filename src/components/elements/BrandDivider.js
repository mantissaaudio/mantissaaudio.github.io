import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  labelHidden: PropTypes.bool,
  id: PropTypes.string
}

const defaultProps = {
  children: null,
  labelHidden: false,
  id: null
}

const BrandDivider = ({
  className,
  children,
  labelHidden,
  id,
  ...props
}) => {

  const classes = classNames(
    'form-label',
    labelHidden && 'screen-reader',
    className
  );

  return (
      <div
        className="container"
        style={{
            margin: 'auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
          <div
            style={{
                width: '100%',
                height: 30,
                border: 10,
                borderStyle: 'solid',
                borderColor: 'black'
            }}
          >
          </div>
          <div
            style={{
                width: '100%',
                height: 30,
                border: 10,
                borderStyle: 'solid',
                borderRight: 5,
                borderLeft: 5,
                borderColor: 'black'
            }}
          >
          </div>
          <div
            style={{
                width: '100%',
                height: 30,
                border: 10,
                borderStyle: 'solid',
                borderColor: 'black',
                backgroundColor: 'black'
            }}
          >
          </div>
      </div>
  );
}

BrandDivider.propTypes = propTypes;
BrandDivider.defaultProps = defaultProps;

export default BrandDivider;
