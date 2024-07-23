import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container Notification">
        <svg viewBox="0 0 1024 1024" className="component1-icon">
          <path d="M725.333 341.333c0 171.136 40.405 278.187 78.976 341.333h-584.619c38.571-63.147 78.976-170.197 78.976-341.333 0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM810.667 341.333c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2c0 261.419-102.101 343.339-109.355 348.757-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h768c23.552 0 42.667-19.115 42.667-42.667 0-14.464-7.168-27.221-18.304-35.029-7.509-5.547-109.696-87.467-109.696-348.971zM548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488z"></path>
        </svg>
        <div className="NotificationText">
          <span className="component1-text">
            {props.notificationTitle ?? (
              <fragment>
                <span className="component1-text3">Notification Title</span>
              </fragment>
            )}
          </span>
          <span className="component1-text1">
            {props.shortNotificationDescription ?? (
              <fragment>
                <span className="component1-text2">Notification Title</span>
              </fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .component1-container {
            overflow: hidden;
            position: relative;
            transition: 0.3s;
          }

          .component1-icon {
            width: auto;
            height: 35px;
          }
          .component1-text {
            font-style: normal;
            font-weight: 600;
          }
          .component1-text1 {
            font-style: normal;
            font-weight: 400;
          }
          .component1-text2 {
            color: rgba(25, 24, 24, 0.65);
            width: 1200px;
            height: var(--dl-size-size-xsmall);
            font-size: 14px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 400;
          }
          .component1-text3 {
            width: 1200px;
            font-size: 16px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  shortNotificationDescription: undefined,
  notificationTitle: undefined,
}

Component1.propTypes = {
  shortNotificationDescription: PropTypes.element,
  notificationTitle: PropTypes.element,
}

export default Component1
