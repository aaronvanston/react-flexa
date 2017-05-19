import omitBy from 'lodash.omitby';
import has from 'lodash.has';
import includes from 'lodash.includes';

const safeProps = ['children'];

const filterProps = (props, filterOut) =>
  omitBy(props, (value, key) =>
    has(filterOut, `${key}`) && !includes(safeProps, key),
  );

export default filterProps;
