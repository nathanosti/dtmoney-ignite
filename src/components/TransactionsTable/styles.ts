import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 3.5rem;
`;

export const Table = styled.table`
  width: 100%;

  border-spacing: 0 0.5rem;

  th {
    color: var(--text);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
`;

export const TBodyContent = styled.td<ITBody>`
  padding: 1rem 2rem;
  border: 0;
  background: #fff;
  border-radius: 5px;

  color: ${(props) => (!props.textColor ? "var(--title)" : props.textColor)};
`;

interface ITBody {
  textColor?: string;
}
