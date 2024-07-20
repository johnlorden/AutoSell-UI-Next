import React from 'react'

import PropTypes from 'prop-types'

const Announcment = (props) => {
  return (
    <>
      <div className="announcment-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="Announcement"
        />
      </div>
      <style jsx>
        {`
          .announcment-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: 10px;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: 15px;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 1600px) {
            .announcment-container {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Announcment.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Announcment.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Announcment
