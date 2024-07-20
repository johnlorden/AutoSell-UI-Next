import React, { useState } from 'react'

import PropTypes from 'prop-types'

const AccountProfileOnly = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <>
      <div className={`account-profile-only-container ${props.rootClassName} `}>
        <img
          alt={props.profileImageSrc}
          src={props.profileImageSrc}
          profileImageSrc={props.imageProfileImageSrc}
          className="Profile"
        />
        {verified && (
          <img
            id="Verified-Badge"
            alt="image"
            src="/verified-badge.svg"
            loading="lazy"
            className="account-profile-only-image1 Badge-Verified"
          />
        )}
      </div>
      <style jsx>
        {`
          .account-profile-only-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .account-profile-only-image1 {
            right: 0px;
            bottom: -25px;
            margin: auto;
          }
        `}
      </style>
    </>
  )
}

AccountProfileOnly.defaultProps = {
  userFullName: 'Full Name',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  headingUserFullName1: '',
  rootClassName: '',
  imageAlt: 'image',
  imageProfileImageSrc: '',
  headingUserFullName: '',
}

AccountProfileOnly.propTypes = {
  userFullName: PropTypes.string,
  profileImageSrc: PropTypes.string,
  headingUserFullName1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageProfileImageSrc: PropTypes.string,
  headingUserFullName: PropTypes.string,
}

export default AccountProfileOnly
