import React, { useState } from 'react'

import PropTypes from 'prop-types'

const AccountProfileOnly = (props) => {
  const [verified, setVerified] = useState(false)
  return (
    <>
      <a href={props.containerUrl} target="_blank" rel="noreferrer noopener">
        <div
          className={`account-profile-only-container ${props.rootClassName} `}
        >
          <img
            id={props.userID}
            alt={props.profileImageSrc}
            src={props.profileImageSrc}
            profileImageSrc={props.imageProfileImageSrc2}
            imageProfileImageSrc={props.imageImageProfileImageSrc}
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
      </a>
      <style jsx>
        {`
          .account-profile-only-container {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            text-decoration: none;
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
  containerUrl: 'https://autosell.io/profile/',
  profileImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageProfileImageSrc1: '',
  imageImageProfileImageSrc: '',
  rootClassName: '',
  imageProfileImageSrc: '',
  imageProfileImageSrc2: '',
  userID: '',
}

AccountProfileOnly.propTypes = {
  containerUrl: PropTypes.string,
  profileImageSrc: PropTypes.string,
  imageProfileImageSrc1: PropTypes.string,
  imageImageProfileImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageProfileImageSrc: PropTypes.string,
  imageProfileImageSrc2: PropTypes.string,
  userID: PropTypes.string,
}

export default AccountProfileOnly
