import styled, { keyframes } from 'styled-components';

const rotate1 = keyframes`
  33% { transform: rotateX(-90deg) rotateY(45deg) rotateZ(180deg) translateX(-100px) translateY(100px) translateZ(100px); }
    66% { transform: rotateX(-180deg) rotateY(90deg) rotateZ(360deg) translateX(-100px) translateY(100px) translateZ(-100px); }
    100% { transform: rotateY(195deg) rotateX(10deg) rotateZ(2deg)}
`;

const rotate2 = keyframes`
  33% { transform: rotateX(-90deg) rotateY(45deg) rotateZ(180deg) translateX(-100px) translateY(100px) translateZ(100px); }
    66% { transform: rotateX(-180deg) rotateY(90deg) rotateZ(360deg) translateX(-100px) translateY(100px) translateZ(-100px); }
    100% { transform: rotateY(105deg) rotateX(3deg) rotateZ(-15deg)}
`;

const rotate3 = keyframes`
  33% { transform: rotateX(-90deg) rotateY(45deg) rotateZ(180deg) translateX(-100px) translateY(100px) translateZ(100px); }
    66% { transform: rotateX(-180deg) rotateY(90deg) rotateZ(360deg) translateX(-100px) translateY(100px) translateZ(-100px); }
    100% { transform: rotateX(-105deg) rotateY(-2deg) rotateZ(20deg) }
`;

const rotate4 = keyframes`
  33% { transform: rotateX(-90deg) rotateY(45deg) rotateZ(180deg) translateX(-100px) translateY(100px) translateZ(100px); }
    66% { transform: rotateX(-180deg) rotateY(90deg) rotateZ(360deg) translateX(-100px) translateY(100px) translateZ(-100px); }
    100% { transform: rotateX(75deg) rotateY(2deg) rotateZ(-15deg) }
`;

const rotate5 = keyframes`
  33% { transform: rotateX(-90deg) rotateY(45deg) rotateZ(180deg) translateX(-100px) translateY(100px) translateZ(100px); }
    66% { transform: rotateX(-180deg) rotateY(90deg) rotateZ(360deg) translateX(-100px) translateY(100px) translateZ(-100px); }
    100% { transform: rotateY(-75deg) rotateX(-2deg) rotateZ(15deg)}
`;

const rotate6 = keyframes`
  33% { transform: rotateX(-90deg) rotateY(45deg) rotateZ(180deg) translateX(-100px) translateY(100px) translateZ(100px); }
    66% { transform: rotateX(-180deg) rotateY(90deg) rotateZ(360deg) translateX(-100px) translateY(100px) translateZ(-100px); }
    100% { transform: rotateX(-15deg) rotateY(20deg) rotateZ(0deg)}
`;


export const DieNoClick = styled.div`
   ${props => props.NoClick ? 'pointer-events: none;' : ''}
`;
export const DieContainer = styled.div`
   margin: 5px 5px 15px 5px;
   display: inline-block;
   perspective: 1000px;
`;
export const Die = styled.div`
   animation-duration: 1s;
   height: 84px;
   width: 84px;
   transition: transform 0.2s ease;
   position: relative;
   -webkit-transform-style: preserve-3d;
   transform-style: preserve-3d;
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;
   animation-iteration-count: 1;
   animation-timing-function: linear;
   animation-fill-mode: forwards;
   z-index: 5;
   ${props => props.DieClass === 1 ? `animation-name: ${rotate1};` : ''}
   ${props => props.DieClass === 2 ? `animation-name: ${rotate2};` : ''}
   ${props => props.DieClass === 3 ? `animation-name: ${rotate3};` : ''}
   ${props => props.DieClass === 4 ? `animation-name: ${rotate4};` : ''}
   ${props => props.DieClass === 5 ? `animation-name: ${rotate5};` : ''}
   ${props => props.DieClass === 6 ? `animation-name: ${rotate6};` : ''}
   ${props => props.DieClass === 'start' ? 
    `perspective: 1000px;
     -webkit-transform-style: preserve-3d;
     transform-style: preserve-3d;
     -webkit-transform: rotateX(-15deg) rotateY(20deg) rotateZ(0deg);
     transform: rotateX(-15deg) rotateY(20deg) rotateZ(0deg);`
    : ''}
   

.face {
   background: white;
   box-shadow: inset 0 0 15px #ccc;
   border-radius: 5px;
   height: 84px;
   width: 84px;
   position: absolute;
}
.dot {
   background: #444;
   boxShadow: inset 5px 0 10px #000;
   height: 12px;
   width: 12px;
   border-radius: 50%;
   display: block;
   position: absolute;
}
.dot1 {
   top: 14px;
   left: 14px; 
}
.dot2 {
   top: 14px;
   right: 14px; 
}
.dot3 {
   top: 36px;
   left: 14px; 
}
.dot4 {
   top: 36px;
   left: 36px; 
}
.dot5 {
   top: 36px;
   right: 14px; 
}
.dot6 {
   bottom: 14px;
   left: 14px; 
}
.dot7 {
   bottom: 14px;
   right: 14px; 
}

.one {
  transform: rotateX(180deg) translateZ(42px);
  -webkit-transform: rotateX(180deg) translateZ(42px);
}
.two {
  transform: rotateY(-90deg) translateZ(42px);
  -webkit-transform: rotateY(-90deg) translateZ(42px);
}
.three {
  transform: rotateX(90deg) translateZ(42px);
  -webkit-transform: rotateX(90deg) translateZ(42px);
}
.four {
  transform: rotateX(-90deg) translateZ(42px);
  -webkit-transform: rotateX(-90deg) translateZ(42px);
}
.five {
  transform: rotateY(90deg) translateZ(42px);
  -webkit-transform: rotateY(90deg) translateZ(42px);
}
.six {
  transform: rotateY(0deg) translateZ(42px);
  -webkit-transform: rotateY(0deg) translateZ(42px);
}
`;
