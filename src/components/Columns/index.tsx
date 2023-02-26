import styled from 'styled-components';

const Columns = styled.div<{ gap?: number, count: number }>`
  display: flex;
  max-width: ${p => p.theme.maxWidth}px;
  gap: ${p => p.gap ?? 60}px;
  padding: 0 50px;

  > div {
    flex: 1 1 ${p => 100 / p.count}%;
  }
`;

export const Column = styled.div``;

export default Columns;
