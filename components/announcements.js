import React from 'react'

import PropTypes from 'prop-types'

const Announcements = (props) => {
  return (
    <>
      <div className={`announcements-announcements ${props.rootClassName} `}>
        <h3 className="HeadingColored">
          {props.heading ?? (
            <fragment>
              <span>Announcements</span>
            </fragment>
          )}
        </h3>
        <div className="announcements-container">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="false"
            data-pagination="false"
            data-autoplay-delay="3500"
            data-pause-autoplay-on-mouse-enter="true"
            data-disable-autoplay-on-interaction="false"
            className="announcements-slider"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="announcements-slider-slide swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="announcements-slider-slide1 swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="announcements-slider-slide2 swiper-slide"
              ></div>
            </div>
            <div
              data-thq="slider-pagination"
              className="announcements-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="announcements-slider-button-prev swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="announcements-slider-button-next swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .announcements-announcements {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .announcements-container {
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .announcements-slider {
            flex: 1;
            width: 274px;
            height: auto;
            overflow: hidden;
            object-fit: cover;
            aspect-ratio: 16/9;
            border-radius: 10px;
          }
          .announcements-slider-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .announcements-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=300');
          }
          .announcements-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=300');
          }
          .announcements-slider-pagination {
            display: none;
          }
          .announcements-slider-button-prev {
            color: var(--dl-color-theme-neutral-dark);
            display: none;
          }
          .announcements-slider-button-next {
            color: var(--dl-color-theme-neutral-dark);
            display: none;
          }
        `}
      </style>
    </>
  )
}

Announcements.defaultProps = {
  rootClassName: '',
  heading: undefined,
}

Announcements.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
}

export default Announcements
