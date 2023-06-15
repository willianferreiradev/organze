import styled from 'styled-components';

export const Container = styled.section`
  background-color: #e6e6e6;
  border-radius: 10px;

  padding: 0.5rem 4rem 2rem 4rem;

  > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
  }
`;

export const Slider = styled.input`
  width: 100%;
  background-color: red;

  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  background-color: #bebebe;
  border-radius: 10px;

  &::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #ff7a00;
    margin-top: -1px;
  }

  &::-webkit-slider-thumb {
    width: 1px;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 10px;
    cursor: ew-resize;
    background: #ff7a00;
    box-shadow: -1000px 0 0 1000px #ff7a00;
  }

  /* ::-moz-range-progress {
    background-color: #43e5f7;
  }
  ::-moz-range-track {
    background-color: #9a905d;
  } */
`;

export const Player = styled.div`
  > p {
    text-align: center;
  }
`;

export const Controls = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  > img:not(.play) {
    width: 40px;
    cursor: pointer;
  }

  > img.play {
    width: 50px;
    cursor: pointer;
  }
`;
