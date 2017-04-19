import { themeProvider } from '~/theme';

const { theme } = themeProvider;

const columnWidth = (props, breakpoint) => `${(Math.abs(props[breakpoint]) / theme(props).columns) * 100}%`;

export default columnWidth;
