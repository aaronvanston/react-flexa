import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 2px solid #8bc34a;
  padding: 10px 10px 0 10px;
`;

Wrapper.defaultProps = {
  border: true,
};

Wrapper.propTypes = {
  border: PropTypes.bool,
};

export default Wrapper;
