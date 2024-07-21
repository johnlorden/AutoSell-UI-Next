import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
    <>
      <div className={`search-bar-search-bar ${props.rootClassName} `}>
        <Link href="/search">
          <a className="search-bar-link">
            <div className="search-bar-container input"></div>
          </a>
        </Link>
        <button
          id="Search-Button"
          name="Search-Button"
          type="submit"
          className="search search-bar-search-button"
        >
          <svg viewBox="0 0 1024 1024" className="search-bar-icon">
            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
        </button>
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="search-bar-textinput input"
        />
      </div>
      <style jsx>
        {`
          .search-bar-search-bar {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .search-bar-link {
            display: contents;
          }
          .search-bar-container {
            height: 40px;
            display: none;
            transition: 0.3s;
            border-color: var(--dl-color-nav-elementactive);
            border-radius: 15px;
            text-decoration: none;
          }
          .search-bar-container:focus {
            border-color: var(--dl-color-nav-elementactive);
            border-width: 1px;
            background-color: var(--dl-color-nav-navactive);
          }
          .search-bar-container:hover {
            background-color: var(--dl-color-nav-navactive);
          }
          .search-bar-icon {
            width: 24px;
            height: 24px;
          }
          .search-bar-textinput {
            width: var(--dl-size-size-xxlarge);
            height: 40px;
            max-width: 100%;
            min-width: 40px;
            transition: 0.3s;
            border-color: var(--dl-color-nav-elementactive);
            border-radius: 15px;
          }
          .search-bar-textinput:focus {
            border-color: var(--dl-color-nav-elementactive);
            border-width: 1px;
            background-color: var(--dl-color-nav-navactive);
          }
          .search-bar-textinput:hover {
            background-color: var(--dl-color-nav-navactive);
          }
          @media (max-width: 1600px) {
            .search-bar-textinput {
              width: 100%;
              max-width: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 767px) {
            .search-bar-container {
              width: 40px;
              display: flex;
              padding: 1.3rem;
              justify-content: center;
            }
            .search-bar-search-button {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              margin: auto;
            }
            .search-bar-textinput {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

SearchBar.defaultProps = {
  searchBarUrl: 'https://www.teleporthq.io',
  rootClassName: '',
  textinputPlaceholder: 'placeholder',
}

SearchBar.propTypes = {
  searchBarUrl: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default SearchBar
