import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SearchBar from '../components/search-bar'
import Account from '../components/account'

const Challenges = (props) => {
  return (
    <>
      <div className="challenges-container">
        <Head>
          <title>Challenges - AutoSell UI</title>
          <meta property="og:title" content="Challenges - AutoSell UI" />
        </Head>
        <div className="challenges-top-bar TopBar">
          <div className="challenges-container1">
            <img
              alt="image"
              src="/autosell%20icon.svg"
              className="challenges-image"
            />
            <img
              alt="image"
              src="/external/autosell.io%20-%20logo%20text-200h-200h.png"
              className="challenges-image1"
            />
            <SearchBar></SearchBar>
          </div>
          <div className="Top TopNav">
            <Link href="/marketplace">
              <a className="challenges-link button">Newsfeed</a>
            </Link>
            <Link href="/marketplace">
              <a className="challenges-link1 button">Marketplace</a>
            </Link>
            <Link href="/programs">
              <a className="challenges-link2 button">Programs</a>
            </Link>
            <Link href="/jobs">
              <a className="button">Jobs</a>
            </Link>
            <button type="button" className="button ActiveButton">
              Challenges
            </button>
          </div>
          <div className="challenges-container3">
            <Account
              planName="Plan Name"
              userFullName="Full Name"
              rootClassName="account-root-class-name6"
            ></Account>
          </div>
        </div>
        <div className="challenges-container4 TopNav Bot">
          <Link href="/">
            <a className="challenges-link4 button">
              <svg viewBox="0 0 1024 1024" className="challenges-icon">
                <path d="M170.667 512c94.251 0 179.541 38.144 241.365 99.968s99.968 147.115 99.968 241.365c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM170.667 213.333c176.725 0 336.683 71.595 452.565 187.435s187.435 275.84 187.435 452.565c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667c0-200.277-81.237-381.696-212.437-512.896s-312.619-212.437-512.896-212.437c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM298.667 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
              </svg>
            </a>
          </Link>
          <Link href="/marketplace">
            <a className="challenges-link5 button">
              <svg viewBox="0 0 1024 1024" className="challenges-icon02">
                <path d="M908.672 602.325c24.875-25.003 37.291-57.685 37.291-90.24 0.043-32.597-12.373-65.365-37.291-90.453l-366.507-366.507c-7.723-7.68-18.389-12.459-30.165-12.459h-426.667c-23.552 0-42.667 19.115-42.667 42.667v426.667c0 10.923 4.181 21.845 12.501 30.208l366.592 366.165c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.453-37.504zM848.341 541.995l-305.92 305.92c-8.363 8.363-19.2 12.544-30.165 12.544s-21.845-4.139-30.165-12.459l-354.091-353.707v-366.293h366.336l354.005 354.005c8.192 8.235 12.331 19.072 12.331 30.037 0 10.923-4.139 21.717-12.331 29.952zM341.333 298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
              </svg>
            </a>
          </Link>
          <button type="button" className="challenges-button1 button">
            <svg viewBox="0 0 1024 1024" className="challenges-icon04">
              <path d="M512 682.667h-341.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM469.333 768v85.333h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-85.333h298.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-682.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504z"></path>
            </svg>
          </button>
          <Link href="/jobs">
            <a className="challenges-link6 button">
              <svg viewBox="0 0 1024 1024" className="challenges-icon06">
                <path d="M384 256v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667zM384 853.333v-512h256v512zM298.667 341.333v512h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM725.333 256v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-128c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM725.333 853.333v-512h128c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501z"></path>
              </svg>
            </a>
          </Link>
          <Link href="/challenges">
            <a className="challenges-link7 button ActiveButton">
              <svg viewBox="0 0 1024 1024" className="challenges-icon08">
                <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
              </svg>
              <span className="challenges-text">Challenges</span>
            </a>
          </Link>
        </div>
        <div className="challenges-container5"></div>
      </div>
      <style jsx>
        {`
          .challenges-container {
            width: 100%;
            cursor: pointer;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .challenges-top-bar {
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
          }
          .challenges-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .challenges-image {
            width: auto;
            display: none;
            min-width: auto;
            min-height: 30px;
            object-fit: cover;
          }
          .challenges-image1 {
            width: 200px;
            object-fit: cover;
          }
          .challenges-link {
            padding-top: 0.6rem;
            border-radius: 15px;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-link1 {
            padding-top: 0.6rem;
            border-radius: 15px;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-link2 {
            padding-top: 0.6rem;
            border-radius: 15px;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-container3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .challenges-container4 {
            box-shadow: 5px 0px 10px 0px #000000;
          }
          .challenges-link4 {
            display: flex;
            padding-top: 0.6rem;
            border-radius: 15px;
            flex-direction: row;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-icon {
            width: 24px;
            height: 24px;
          }
          .challenges-link5 {
            display: flex;
            padding-top: 0.6rem;
            border-radius: 15px;
            flex-direction: row;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-icon02 {
            width: 24px;
            height: 24px;
          }
          .challenges-button1 {
            display: flex;
            padding-top: 0.6rem;
            border-radius: 15px;
            flex-direction: row;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-icon04 {
            width: 24px;
            height: 24px;
          }
          .challenges-link6 {
            display: flex;
            padding-top: 0.6rem;
            border-radius: 15px;
            flex-direction: row;
            padding-bottom: 0.6rem;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.05);
          }
          .challenges-icon06 {
            width: 24px;
            height: 24px;
          }
          .challenges-link7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .challenges-icon08 {
            width: 24px;
            height: 24px;
          }
          .challenges-container5 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 1600px) {
            .challenges-image {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .challenges-image {
              display: flex;
            }
            .challenges-image1 {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .challenges-text {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .challenges-link4 {
              padding-left: 1rem;
            }
            .challenges-link5 {
              padding-left: 1rem;
            }
            .challenges-button1 {
              padding-left: 1rem;
            }
            .challenges-link6 {
              padding-left: 1rem;
            }
            .challenges-link7 {
              padding-left: 1rem;
            }
            .challenges-text {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Challenges
