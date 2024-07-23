import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const SignIn = (props) => {
  return (
    <>
      <div className="sign-in-container">
        <Head>
          <title>Sign-In - AutoSell UI</title>
          <meta property="og:title" content="Sign-In - AutoSell UI" />
        </Head>
        <div className="SignInUp">
          <div className="sign-in-container02">
            <img src="/frame%20140.svg" alt="image" className="sign-in-image" />
            <div className="thq-section-padding">
              <div>
                <div className="sign-in-container04">
                  <Script
                    html={`<script>

function togglePassword() {
    const passwordField = document.getElementById('password');
    const seePassButton = document.getElementById('SeePass');
    const hidePassButton = document.getElementById('HidePass');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        seePassButton.style.display = 'none';
        hidePassButton.style.display = 'inline-block';
    } else {
        passwordField.type = 'password';
        hidePassButton.style.display = 'none';
        seePassButton.style.display = 'inline-block';
    }
}


</script>`}
                  ></Script>
                </div>
              </div>
              <div className="SignInUpForm">
                <div className="sign-in-title-root">
                  <h2 className="sign-in-text thq-heading-2">Log In</h2>
                  <div className="sign-in-have-an-account-login">
                    <p className="sign-in-text01 thq-body-large">
                      Hello Welcome Back!
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div
                  id="messageContainer"
                  style="display: none;"
                  className="sign-in-container05"
                >
                  <span id="message" className="sign-in-text02">
                    Text
                  </span>
                </div>
                <div className="Form">
                  <div className="inputContainer">
                    <label htmlFor="Email" className="Label">
                      <span>Email</span>
                      <br></br>
                    </label>
                    <input
                      type="text"
                      placeholder="name@example.com"
                      name="Email"
                      id="Email"
                      className="sign-in-textinput input"
                    />
                  </div>
                  <div className="inputContainer">
                    <label htmlFor="password" className="Label">
                      <span>Password</span>
                      <br></br>
                    </label>
                    <div className="sign-in-container09">
                      <input
                        type="password"
                        placeholder="Password"
                        name="Password"
                        id="password"
                        className="sign-in-textinput1 input"
                      />
                      <svg
                        viewBox="0 0 1024 1024"
                        id="HidePass"
                        onclick="togglePassword()"
                        style="display:none;"
                        className="passwordactions"
                      >
                        <path d="M432.128 222.464c27.776-6.485 55.253-9.429 79.36-9.131 75.008 0 141.184 23.851 198.741 59.435 47.744 29.525 89.131 66.859 123.477 104.448 27.477 30.080 50.133 59.947 67.627 85.376 13.952 20.267 24.32 37.291 31.275 49.28-23.296 40.661-49.493 77.696-75.861 108.459-15.317 17.877-13.269 44.843 4.608 60.16s44.843 13.269 60.16-4.608c34.901-40.704 68.736-90.112 97.408-143.787 6.315-11.904 6.955-26.368 0.555-39.211 0 0-16.896-33.664-47.787-78.635-19.243-27.989-44.288-61.099-74.965-94.635-38.144-41.771-85.504-84.779-141.611-119.467-68.053-42.027-149.589-72.149-242.603-72.149-31.317-0.384-65.707 3.371-99.84 11.349-22.955 5.376-37.205 28.331-31.829 51.285s28.331 37.205 51.285 31.829zM427.819 488.192l107.989 107.989c-7.765 2.603-15.872 4.011-24.021 4.309-21.888 0.768-43.947-6.784-61.184-22.869s-26.325-37.547-27.093-59.435c-0.341-10.155 1.067-20.309 4.309-30.037zM255.275 315.605l108.928 108.928c-18.517 29.483-27.136 63.317-25.941 96.683 1.536 43.605 19.755 86.741 54.229 118.827s78.763 47.232 122.368 45.696c29.525-1.024 58.837-9.728 84.651-25.941l99.072 99.072c-58.795 34.091-123.52 51.029-187.051 51.797-73.984 0-140.16-23.851-197.717-59.435-47.744-29.525-89.131-66.859-123.477-104.448-27.477-30.080-50.133-59.947-67.627-85.376-13.909-20.267-24.32-37.248-31.232-49.237 44.8-77.739 101.376-144.171 163.883-196.565zM12.501 72.832l182.229 182.229c-73.856 63.104-139.477 143.275-189.653 236.757-6.315 11.904-6.997 26.411-0.555 39.253 0 0 16.896 33.664 47.787 78.635 19.243 27.989 44.288 61.099 74.965 94.635 38.144 41.771 85.504 84.779 141.611 119.467 68.053 42.069 149.589 72.192 243.627 72.192 85.035-1.024 171.477-25.643 248.107-75.051l190.549 190.549c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-378.709-378.709c-0.085-0.085-0.213-0.213-0.299-0.299l-179.584-179.627c-0.341-0.299-0.683-0.683-1.024-1.024l-379.051-379.008c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        id="ShowPass"
                        onclick="togglePassword()"
                        className="passwordactions"
                      >
                        <path d="M4.523 492.928c-5.803 11.691-6.229 25.728 0 38.144 0 0 16.896 33.664 47.787 78.635 19.243 27.989 44.288 61.099 74.965 94.635 38.144 41.771 85.504 84.779 141.611 119.467 68.053 42.069 149.589 72.192 243.115 72.192s175.061-30.123 243.115-72.192c56.107-34.688 103.467-77.696 141.611-119.467 30.635-33.536 55.723-66.645 74.965-94.635 30.891-44.971 47.787-78.635 47.787-78.635 5.803-11.691 6.229-25.728 0-38.144 0 0-16.896-33.664-47.787-78.635-19.243-27.989-44.288-61.099-74.965-94.635-38.144-41.771-85.504-84.779-141.611-119.467-68.053-42.069-149.589-72.192-243.115-72.192s-175.061 30.123-243.115 72.192c-56.107 34.688-103.467 77.696-141.611 119.467-30.677 33.536-55.723 66.603-74.965 94.635-30.891 44.971-47.787 78.635-47.787 78.635zM91.307 512c6.955-11.989 17.365-29.056 31.317-49.408 17.493-25.429 40.107-55.296 67.627-85.376 34.347-37.589 75.733-74.923 123.477-104.448 57.6-35.584 123.776-59.435 198.272-59.435s140.672 23.851 198.229 59.435c47.744 29.525 89.131 66.859 123.477 104.448 27.477 30.080 50.133 59.947 67.627 85.376 13.995 20.352 24.405 37.376 31.317 49.408-6.955 11.989-17.365 29.056-31.317 49.408-17.493 25.429-40.107 55.296-67.627 85.376-34.347 37.589-75.733 74.923-123.477 104.448-57.557 35.584-123.733 59.435-198.229 59.435s-140.672-23.851-198.229-59.435c-47.744-29.525-89.131-66.859-123.477-104.448-27.477-30.080-50.133-59.947-67.627-85.376-13.995-20.352-24.405-37.419-31.36-49.408zM682.667 512c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 512c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
                      </svg>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="SignUpWithEmail"
                    name="SignUp"
                    className="thq-button-filled"
                  >
                    <span className="sign-in-text09 thq-body-small">
                      Sign in with email
                    </span>
                  </button>
                </div>
                <div className="sign-in-divider">
                  <div className="sign-in-divider1"></div>
                  <p className="thq-body-large">OR</p>
                  <div className="sign-in-divider2"></div>
                </div>
                <div className="sign-in-container10">
                  <button
                    id="SignUpWithFaceBook"
                    name="SignUpWithFaceBook"
                    type="submit"
                    className="sign-in-button1 thq-button-outline"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="sign-in-icon4"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                    <span className="thq-body-small">
                      Continue with Facebook
                    </span>
                  </button>
                  <button
                    id="SignUpWithGoogle"
                    name="SignUpWithGoogle"
                    type="submit"
                    className="sign-in-button2 thq-button-outline"
                  >
                    <svg
                      viewBox="0 0 860.0137142857142 1024"
                      className="sign-in-icon6"
                    >
                      <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                    </svg>
                    <span className="thq-body-small">Continue with Google</span>
                  </button>
                </div>
                <div className="sign-in-have-an-account-login1">
                  <p className="SimpleMessage">
                    <span>
                      Don&apos;t have an account?
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <Link href="/sign-in">
                      <a className="sign-in-link">Sign Up</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/bg.svg" alt="image" className="sign-in-image1" />
      </div>
      <style jsx>
        {`
          .sign-in-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
          }
          .sign-in-container02 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-image {
            width: 100%;
            height: var(--dl-size-size-medium);
            display: none;
            object-fit: cover;
          }
          .sign-in-container04 {
            display: contents;
          }
          .sign-in-title-root {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .sign-in-text {
            text-align: center;
          }
          .sign-in-have-an-account-login {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
          }
          .sign-in-text01 {
            text-align: center;
          }
          .sign-in-container05 {
            flex: 0 0 auto;
            color: var(--dl-color-theme-primary1);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .sign-in-text02 {
            width: 100%;
          }
          .sign-in-textinput {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-nav-elementactive);
            color: var(--dl-color-nav-elementactive);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-style: solid;
            border-width: 1px;
            border-radius: 30px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .sign-in-textinput:hover {
            fill: var(--dl-color-maincolors-white);
            color: var(--dl-color-maincolors-white);
            background-color: var(--dl-color-nav-elementactive);
          }
          .sign-in-container09 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .sign-in-textinput1 {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-nav-elementactive);
            color: var(--dl-color-nav-elementactive);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-style: solid;
            border-width: 1px;
            border-radius: 30px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .sign-in-textinput1:hover {
            fill: var(--dl-color-maincolors-white);
            color: var(--dl-color-maincolors-white);
            background-color: var(--dl-color-nav-elementactive);
          }
          .sign-in-text09 {
            text-align: center;
          }
          .sign-in-divider {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .sign-in-divider1 {
            flex: 1;
            width: var(--dl-size-size-medium);
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-nav-elementactive);
          }
          .sign-in-divider2 {
            flex: 1;
            width: auto;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-nav-elementactive);
          }
          .sign-in-container10 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sign-in-button1 {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-nav-elementactive);
            color: var(--dl-color-nav-elementactive);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-style: solid;
            border-width: 1px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .sign-in-button1:hover {
            fill: var(--dl-color-maincolors-white);
            color: var(--dl-color-maincolors-white);
            background-color: var(--dl-color-nav-elementactive);
          }
          .sign-in-icon4 {
            width: 24px;
            height: 24px;
          }
          .sign-in-button2 {
            gap: var(--dl-space-space-halfunit);
            fill: var(--dl-color-nav-elementactive);
            color: var(--dl-color-nav-elementactive);
            width: 100%;
            display: flex;
            box-sizing: border-box;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-nav-elementactive);
            border-style: solid;
            border-width: 1px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .sign-in-button2:hover {
            fill: var(--dl-color-maincolors-white);
            color: var(--dl-color-maincolors-white);
            background-color: var(--dl-color-nav-elementactive);
          }
          .sign-in-icon6 {
            width: 24px;
            height: 24px;
          }
          .sign-in-have-an-account-login1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
          }
          .sign-in-link {
            color: var(--dl-color-nav-elementactive);
            font-weight: 700;
            text-decoration: underline;
          }
          .sign-in-image1 {
            flex: 1;
            width: 50%;
            align-self: stretch;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .sign-in-image {
              display: flex;
            }
            .sign-in-image1 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default SignIn
