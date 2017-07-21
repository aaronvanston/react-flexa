import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-family: monospace;
  font-weight: 500;
  line-height: 1rem;
  color: white;

  ${props => props.height && css`
    min-height: ${props.height};
  `};

  ${props => props.autoGrow && css`
    flex: 1;
  `};

  ${props => props.bgColor && css`
    background-color: ${props.bgColor};
  `};

  @media (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

Box.defaultProps = {
  bgColor: 'dodgerblue',
  height: '1rem',
};

Box.propTypes = {
  dodgerblue: PropTypes.string,
  height: PropTypes.string,
};

export default Box;
