import styled from 'styled-components';

export const Container = styled.section`
  background: var(--background-card);
  border-radius: 10px;

  padding: 0.5rem 4rem 2rem 4rem;

  min-height: 80%;
  color: #ffffff;

  > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
`;

export const CardBody = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex: 1;
`;

export const Slider = styled.input`
  width: 100%;
  background-color: red;
  margin-top: 1rem;

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

export const OccastionContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  padding: 0 4rem;
  justify-content: flex-start;
`;

export const Player = styled.div`
  width: 100%;
  p {
    text-align: center;
    color: #b7b7b7;
    font-size: 1.2rem;
  }

  img.play {
    width: 20px;
    cursor: pointer;
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
    width: 20px;
    cursor: pointer;
  }
`;

export const Selector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  height: 150px;
  width: 150px;

  border: 2px solid #ff7a00;
  border-radius: 10px;

  padding: 2rem;

  > img {
    width: 50px;
    /* padding-top: 1rem; */
  }

  > label {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
