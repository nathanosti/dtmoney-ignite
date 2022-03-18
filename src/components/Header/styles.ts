import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;

  padding: 2rem 1rem 10rem;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 172px;
  height: 40px;
`;

export const Button = styled.button`
  width: 195px;
  height: 48px;

  border: none;
  border-radius: 5px;

  background: #6933ff;

  outline: none;

  font-weight: 600;
  font-size: 1rem;
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
