const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

let employersNames = employers.filter(el => {
  return el.length > 0 
}).map( el => el.toLowerCase().trim())

const calcCash = (own = 0) => {
  return own.reduce((el, el1) => el + el1)
}

const money = calcCash(sponsors.cash);

const makeBusiness = (owner, director = 'Victor', money, emp) => {
    const {cash, eu, rus} = sponsors ;
    const sumSponsors = [...[...eu, ...rus, 'unexpected sponsor']];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${money}. And our employers:
    ${emp}
    And we have a sponsors:
    ${sumSponsors}
    Note. Be careful with ${eu[0]}. It's a huge risk.`);
}

makeBusiness(...['Sam', ,money, employersNames]);