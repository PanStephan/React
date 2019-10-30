const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

let employersNames = employers.filter(el => {
  return el.length > 0 
})

employersNames = employersNames.map(el => {
  return el.toLowerCase().trim();
})

function calcCash(own = 0) {
    let total = 0;
    own.forEach(el => {
      return total += el
    });
    return total
}

const money = calcCash(sponsors.cash);

function makeBusiness(owner, director = 'Victor', money, emp) {
    const {cash, eu, rus} = sponsors ;
    const sumSponsors = eu.concat(rus, 'unexpected sponsor') ;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${money}. And our employers:
    ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness(...['Sam', ,money, employersNames]);