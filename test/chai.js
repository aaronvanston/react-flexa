import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import dirtyChai from 'dirty-chai';

chai.use(chaiEnzyme());
chai.use(dirtyChai);

export default chai;
