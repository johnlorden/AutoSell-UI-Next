import React from 'react'

import PropTypes from 'prop-types'

const Hashtag = (props) => {
  return (
    <>
      <div className="hashtag-hashtag">
        <span id="Caption" className="ActiveText">
          {props.text}
        </span>
        <span id="HashtagText" className="ActiveText">
          {props.text1}
        </span>
      </div>
      <style jsx>
        {`
          .hashtag-hashtag {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

Hashtag.defaultProps = {
  text1: 'Text',
  text: '#',
}

Hashtag.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Hashtag
