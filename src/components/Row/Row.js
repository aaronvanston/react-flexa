import { PropTypes } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  box-sizing: border-box;

  /* Iterate over breakpoint props xs, sm, md, lg */
  /* Create media query, ____ and up */

    /* get gutter width from props first, if not passed in go to config */
    margin-left: 0; /* -(gutter width / 2) */
    margin-right: 0; /* -(gutter width / 2) */

    /* The following fields based on object containing responsive assignment or strings */
    display: flex; /* flex | flex-inline */
    flex-direction: row; /* row | row-reverse | column | column-reverse */
    flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
    justify-content: flex-start; /* flex-start | flex-end | center | space-between | space-around */
    align-items: flex-start; /* flex-start | flex-end | center | baseline | stretch */
    align-content: flex-start /* flex-start | flex-end | center | space-between | space-around | stretch */
`;

Row.displayName = 'Row';

Row.PropTypes = {
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  flexWrap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alignItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  alignContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Row;
