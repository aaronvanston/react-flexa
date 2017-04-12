import _ from 'lodash';

import { themeProvider } from '~/theme';

const { breakpoints } = themeProvider;

const sortBreakpointProps = props => _.keys(_.pick(props, breakpoints));

export default sortBreakpointProps;
