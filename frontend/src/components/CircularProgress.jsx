// frontend/src/components/CircularProgress.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for Circular Progress
const rotate = keyframes`
  from {
    stroke-dashoffset: 314; // Circumference of the circle
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const CircularProgressContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const CircularProgressSVG = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const Circle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 5;
  stroke-linecap: round;
  stroke: #4CAF50;
  stroke-dasharray: 314; // Circumference of the circle (2 * PI * radius)
  stroke-dashoffset: ${props => 314 - (props.percentage / 100) * 314}; // Calculate offset
  animation: ${rotate} 1s linear forwards;
`;

const Percentage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8em;
`;

const CircularProgress = ({ percentage }) => {
    return (
        <CircularProgressContainer>
            <CircularProgressSVG>
                <Circle
                    r="50"
                    cx="20"
                    cy="20"
                    percentage={percentage}
                />
            </CircularProgressSVG>
            <Percentage>{percentage}%</Percentage>
        </CircularProgressContainer>
    );
};

export default CircularProgress;