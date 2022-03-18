import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  margin-top: -10%;
`;

export const SummaryCard = styled.div<ISummaryStyle>`
  padding: 2rem 2.5rem;

  background: ${props => props.type === 'total' ? 'var(--green)' : '#fff'};

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  header {
    width: 280px;

    display: flex;
    justify-content: space-between;

    span {
      color: ${props => props.type === 'total' ? '#fff' : 'var(--title)'};
    }
  }

  h1 {
    color: ${props => props.type === 'total' ? '#fff' : 'var(--title)'};
  }
`;

interface ISummaryStyle {
  type: string;
}