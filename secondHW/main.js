import makeBusiness from './makeBusiness';
import employersNames from './employersFilter';
import {sponsors} from './data';

(() => {
  const render = new makeBusiness();
  render.makeBusinessResult(...['Sam', ,sponsors.cash, employersNames]);
})();
