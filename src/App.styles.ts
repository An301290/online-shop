import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
.description {
  display: flex;
  color: #232F3E;
  justify-content: center;
  align-items: center;
  font-family: 'Monserrat', sans-serif;
  padding: 20px;
}
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  color: gray;
`;

