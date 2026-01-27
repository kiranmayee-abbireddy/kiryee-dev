import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="wind-line wind-1" />
        <div className="wind-line wind-2" />
        <div className="wind-line wind-3" />
        <div className="wind-line wind-4" />
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="bird-wrapper">
          <svg className="bird-svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g className="wing-right">
              <path style={{fill: 'var(--bal-bird-primary)'}} d="M266.298,313.842c0,0,51.495,164.781,122.115,129.471c0,0,35.31,8.828,44.138-26.483c0,0,26.483,0,26.483-35.31c0,0,26.483-8.828,17.655-44.138c0,0,38.253-35.31-80.184-97.839l-131.678,0.736L266.298,313.842z" />
              <path style={{fill: 'var(--bal-bird-secondary)'}} d="M301.76,393.27c-22.227-37.143-35.46-79.428-35.46-79.428l-1.472-73.564l131.678-0.736c22.382,11.817,39.154,22.658,51.659,32.476c-19.908,45.301-77.406,14.268-77.406,65.364C370.759,379.803,331.148,393.87,301.76,393.27z" />
              <path style={{fill: 'var(--bal-bird-highlight)'}} d="M379.586,240.278v-0.641l16.919-0.095c22.382,11.817,39.154,22.658,51.659,32.476c-10.435,23.744-31.161,26.537-48.557,31.157C407.682,284.601,405.878,259.997,379.586,240.278z" />
              <path style={{fill: 'var(--bal-bird-primary)'}} d="M476.69,63.727c12.868,0,35.31,8.828,35.31,44.138s0,105.931-26.483,123.586s-88.276,17.655-132.414,17.655s-88.276-8.828-88.276-8.828v-8.828C264.828,231.451,344.276,63.727,476.69,63.727z" />
            </g>
            <g className="wing-left">
              <path style={{fill: 'var(--bal-bird-primary)'}} d="M245.702,313.842c0,0-51.495,164.781-122.115,129.471c0,0-35.31,8.828-44.138-26.483c0,0-26.483,0-26.483-35.31c0,0-26.483-8.828-17.655-44.138c0,0-38.253-35.31,80.184-97.839l131.678,0.736L245.702,313.842z" />
              <path style={{fill: 'var(--bal-bird-secondary)'}} d="M210.24,393.27c22.227-37.143,35.46-79.428,35.46-79.428l1.472-73.564l-131.678-0.736c-22.382,11.817-39.154,22.658-51.659,32.476c19.908,45.301,77.406,14.268,77.406,65.364C141.241,379.803,180.852,393.87,210.24,393.27z" />
              <path style={{fill: 'var(--bal-bird-highlight)'}} d="M132.414,240.278v-0.641l-16.919-0.095c-22.382,11.817-39.154,22.658-51.659,32.476c10.435,23.744,31.161,26.537,48.557,31.157C104.318,284.601,106.122,259.997,132.414,240.278z" />
              <path style={{fill: 'var(--bal-bird-primary)'}} d="M35.31,63.727C22.442,63.727,0,72.554,0,107.865s0,105.931,26.483,123.586s88.276,17.655,132.414,17.655s88.276-8.828,88.276-8.828v-8.828C247.172,231.451,167.724,63.727,35.31,63.727z" />
            </g>
            <path style={{fill: '#5D4037'}} d="M256,231.451c-2.44,0-4.414-1.974-4.414-4.414c0-17.038-17.992-60.301-42.845-85.155 c-1.725-1.725-1.725-4.518,0-6.241c1.725-1.724,4.518-1.725,6.241,0c19.561,19.561,34.13,47.672,41.017,69.121 c6.888-21.449,21.457-49.56,41.017-69.121c1.725-1.725,4.518-1.725,6.241,0c1.724,1.725,1.725,4.518,0,6.241 c-24.853,24.854-42.845,68.117-42.845,85.155C260.414,229.477,258.44,231.451,256,231.451z" />
            <path style={{fill: '#3E2723'}} d="M256,346.209L256,346.209c-9.751,0-17.655-7.904-17.655-17.655v-97.103 c0-9.751,7.904-17.655,17.655-17.655l0,0c9.751,0,17.655,7.904,17.655,17.655v97.103C273.655,338.305,265.751,346.209,256,346.209z" />
          </svg>
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-container {
    /* Variables scoped to the component */
    --bal-bg-top: #00d2ff;
    --bal-bg-bottom: #3a7bd5;
    --bal-bird-primary: #ff5e62;
    --bal-bird-secondary: #ff9966;
    --bal-bird-highlight: #fff3b0;
    --bal-cloud-color: rgba(255, 255, 255, 0.85);
    --bal-wind-color: rgba(255, 255, 255, 0.4);
    --bal-text-color: #ffffff;

    width: 320px;
    height: 320px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      135deg,
      var(--bal-bg-top) 0%,
      var(--bal-bg-bottom) 100%
    );
    border-radius: 40px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 255, 255, 0.2);
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    /* Enable 3D perspective */
    perspective: 800px;

    /* Using relative positioning for the component itself instead of fixed or absolute centering */
    margin: 20px auto;
  }

  /* Scoped Environment Styles */
  .loader-container .wind-line {
    position: absolute;
    width: 2px;
    background: var(--bal-wind-color);
    border-radius: 4px;
    top: -100px;
    animation: balWindFall 0.4s linear infinite;
  }

  .loader-container .wind-1 {
    left: 10%;
    height: 80px;
    animation-duration: 0.3s;
  }
  .loader-container .wind-2 {
    left: 90%;
    height: 100px;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
  }
  .loader-container .wind-3 {
    left: 50%;
    height: 50px;
    animation-duration: 0.4s;
    animation-delay: 0.3s;
  }
  .loader-container .wind-4 {
    left: 75%;
    height: 70px;
    animation-duration: 0.35s;
    animation-delay: 0.2s;
  }

  .loader-container .cloud {
    position: absolute;
    background: var(--bal-cloud-color);
    border-radius: 50px;
    top: -150px;
    filter: blur(4px);
    animation: balCloudFall 3s linear infinite;
  }

  .loader-container .cloud::after,
  .loader-container .cloud::before {
    content: "";
    position: absolute;
    background: inherit;
    border-radius: 50%;
  }

  .loader-container .cloud-1 {
    width: 80px;
    height: 30px;
    left: -10px;
    animation-duration: 2.5s;
  }
  .loader-container .cloud-1::after {
    width: 40px;
    height: 40px;
    top: -15px;
    left: 15px;
  }

  .loader-container .cloud-2 {
    width: 100px;
    height: 40px;
    right: -20px;
    animation-duration: 4s;
    animation-delay: 1s;
  }
  .loader-container .cloud-2::after {
    width: 50px;
    height: 50px;
    top: -20px;
    left: 25px;
  }

  /* Scoped Bird Animation Styles */
  .loader-container .bird-wrapper {
    position: absolute;
    top: 48%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    z-index: 10;
    animation: balGentleBob 2s ease-in-out infinite;
  }

  .loader-container .bird-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
    filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.3));
  }

  .loader-container .wing-right {
    transform-origin: 256px 256px;
    animation: balFlapRight3D 0.4s ease-in-out infinite alternate;
  }

  .loader-container .wing-left {
    transform-origin: 256px 256px;
    animation: balFlapLeft3D 0.4s ease-in-out infinite alternate;
  }

  @keyframes balFlapRight3D {
    0% {
      transform: rotateZ(30deg) rotateY(0deg) rotateX(0deg) scale(0.9);
    }
    100% {
      transform: rotateZ(-20deg) rotateY(-40deg) rotateX(20deg) scale(1.1);
    }
  }

  @keyframes balFlapLeft3D {
    0% {
      transform: rotateZ(-30deg) rotateY(0deg) rotateX(0deg) scale(0.9);
    }
    100% {
      transform: rotateZ(20deg) rotateY(40deg) rotateX(20deg) scale(1.1);
    }
  }

  @keyframes balGentleBob {
    0%,
    100% {
      transform: translate(-50%, -50%) rotateX(5deg);
    }
    50% {
      transform: translate(-50%, -56%) rotateX(15deg);
    }
  }

  @keyframes balCloudFall {
    0% {
      top: -150px;
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      top: 400px;
      opacity: 0;
    }
  }

  @keyframes balWindFall {
    0% {
      top: -100px;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      top: 400px;
      opacity: 0;
    }
  }

  .loader-container .loading-text {
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
    color: var(--bal-text-color);
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 20;
  }`;

export default Loader;
