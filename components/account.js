import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Account = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <>
      <div className="account-container">
        <img
          alt={props.profileImageSrc}
          src={props.profileImageSrc}
          className="Profile"
        />
        <div className="account-container1">
          <div className="account-container2">
            {verified && (
              <img
                id="Verified-Badge"
                alt="image"
                src="/verified-badge.svg"
                loading="lazy"
                className="Badge-Verified"
              />
            )}
            <h1 id="User Full Name" className="UserFullName">
              {props.userFullName}
            </h1>
          </div>
          <p id="User Plan" className="PlanName">
            {props.planName}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .account-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .account-container1 {
            gap: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .account-container2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

Account.defaultProps = {
  imageAlt: 'image',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  userFullName: 'Full Name',
  planName: 'Plan Name',
}

Account.propTypes = {
  imageAlt: PropTypes.string,
  profileImageSrc: PropTypes.string,
  userFullName: PropTypes.string,
  planName: PropTypes.string,
}

export default Account
