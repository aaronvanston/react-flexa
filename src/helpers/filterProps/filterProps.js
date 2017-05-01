import _ from 'lodash';

const safeProps = ['children'];

const filterProps = (props, filterOut) =>
  _.omitBy(props, (value, key) =>
    _.has(filterOut, `${key}`) && !_.includes(safeProps, key),
  );

export default filterProps;
