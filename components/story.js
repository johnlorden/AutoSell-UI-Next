import React from 'react'

import PropTypes from 'prop-types'

const Story = (props) => {
  return (
    <>
      <div id="Story" className="story-container">
        <img alt={props.imageSrc} src={props.imageSrc} className="StoryIco" />
      </div>
      <style jsx>
        {`
          .story-container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

Story.defaultProps = {
  imageAlt1: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Story.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Story