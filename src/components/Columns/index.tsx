import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  max-width: ${p => p.theme.maxWidth}px;
  gap: 60px;
  padding: 0 50px;
`;

export const Column = styled.div`
  flex: 1 1 auto;
`;

export default Columns;
