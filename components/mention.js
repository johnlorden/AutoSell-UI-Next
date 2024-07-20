import React from 'react'

import PropTypes from 'prop-types'

const Mention = (props) => {
  return (
    <>
      <div className={`mention-hashtag ${props.rootClassName} `}>
        <span id="Caption" className="ActiveText">
          @
        </span>
        <span id="HashtagText" className="ActiveText">
          {props.text1}
        </span>
      </div>
      <style jsx>
        {`
          .mention-hashtag {
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

Mention.defaultProps = {
  text: '@',
  rootClassName: '',
  text1: 'Text',
}

Mention.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default Mention
