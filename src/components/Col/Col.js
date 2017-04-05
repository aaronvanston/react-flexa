import { PropTypes } from 'react';
import styled from 'styled-components';

const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  display: block;

  /* Iterate over breakpoint props xs, sm, md, lg */
  /* Create media query, ____ and up */

    /* get gutter width from props first, if not passed in go to config */
    /* Should pull the gutter width from config but if a row has a custom value, pull from it */
    padding-left: 0; /* gutter width / 2 */
    padding-right: 0; /* gutter width / 2 */

    /* Reverse based on media query reverse = { sm: true, md: false } and up */
    /* If its an object, need to check if the key of the current breakpoint exists and set it */
    flex-direction: column-reverse;

    /* Order based on media query order = { sm: true, md: false } and up */
    /* If its an object, need to check if the key of the current breakpoint exists and set it */
    order: 0;

    /* Align-self based on media query align-self = { sm: 'flex-start', md: 'auto' } and up */
    /* If its an object, need to check if the key of the current breakpoint exists and set it */
    align-self: auto;

    /* If breakpoint specified column sizing */
    flex-basis: 0; /* (100 / columnsCount * value)% */
    max-width: 0; /* (100 / columnsCount * value)% */

  /* If no breakpoint prop is specified, auto width */
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;

  /* Hidden based on media query hidden = { sm: true, md: false } and up */
  /* If its an object, need to check if the key of the current breakpoint exists and set it */
  ${props => (props.hidden || (props.hidden[currentBreakpoint] === true)) && `
    display: hidden;
  `}
`;

Col.displayName = 'Col';

Col.PropTypes = {
  reverse: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  order: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  alignSelf: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Col;
