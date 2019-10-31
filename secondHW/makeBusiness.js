import {sponsors} from './data';
import calcCash from './calcCash';

class makeBusiness extends calcCash{
  constructor() {
    super();
  }
  makeBusinessResult(owner, director = 'Victor', money, emp) {
    const {cash, eu, rus} = sponsors ;
    const sumSponsors = [...[...eu, ...rus, 'unexpected sponsor']];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${super.calc(money)}. And our employers:
    ${emp}
    And we have a sponsors:
    ${sumSponsors}
    Note. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}


export default makeBusiness