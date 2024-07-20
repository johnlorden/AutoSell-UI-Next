import React from 'react'

import PropTypes from 'prop-types'

const Crumb = (props) => {
  return (
    <>
      <div className="crumb-container breadcrumb">
        <span>/</span>
        <span className="crumb-text1">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .crumb-container {
            gap: 10px;
            position: relative;
          }
          .crumb-text1 {
            font-style: normal;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

Crumb.defaultProps = {
  linkText: '',
  text1: 'Crumb',
}

Crumb.propTypes = {
  linkText: PropTypes.string,
  text1: PropTypes.string,
}

export default Crumb
