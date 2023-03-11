import styled from 'styled-components';

const Columns = styled.div<{ gap?: number, count: number }>`

  max-width: ${p => p.theme.maxWidth}px;
  padding: 0 50px;
  box-sizing: border-box;

  @media (min-width: ${p => p.theme.screens.small}px) {
    display: flex;
    gap: ${p => p.gap ?? 60}px;

    > div {
      flex: 1 1 ${p => 100 / p.count}%;
    }
  }

  width: 100%;
`;

export const Column = styled.div``;

export default Columns;
