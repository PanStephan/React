import {employers} from './data';

let employersNames = employers.filter(el => {
  return el.length > 0 
}).map( el => el.toLowerCase().trim())

export default employersNames;