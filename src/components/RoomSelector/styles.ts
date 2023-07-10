import styled from 'styled-components';

type SelectorsProps = {
  active?: boolean;
};

export const Container = styled.section`
  /* background: var(--background-card); */
  background: black;
  padding: 0.5rem 0 2rem 0;
  border-radius: 10px;

  > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    color: #ffffff;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const Selector = styled.div<SelectorsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  height: 90px;
  width: 150px;

  border: 2px solid #ff7a00;
  border-radius: 10px;

  padding: 2rem;
  background: var(--background);
  color: #ffffff;

  &:active {
    background: rgba(255, 122, 0, 0.13);
  }

  > img {
    width: 50px;
  }

  > label {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
