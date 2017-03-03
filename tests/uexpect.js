const unexpected = require('unexpected');
const unexpectedReact = require('unexpected-react/jest');
const unexpectedSet = require('unexpected-set');

const uexpect = unexpected.clone()
  .use(unexpectedReact)
  .use(unexpectedSet);

export default uexpect;
