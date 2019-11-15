(function scanDOM() {
  let currentNode,
  el = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

  let DOM = []
  while(currentNode = el.nextNode()) {
    DOM.push(currentNode)
  }

  DOM.sort()
  let len = 1
  for(let i = 0; i < DOM.length; i++) {
    if(i != DOM.length-1) {
      if(DOM[i+1].localName === DOM[i].localName) {
        len = len+1
      }
      else {
        console.log(`DOM elements ${DOM[i].localName}`, len)
        len = 1
      }
    }  
  }

  const classesNamesNoFilter = DOM.map(el => {
    return el.className
  })
  classesNamesNoFilter.sort()
  classesNames = classesNamesNoFilter.filter(el => el != '')

  let classesLen = 1
  for(let i = 0; i < classesNames.length; i++) {
    if(i != classesNames.length) {
      if(classesNames[i+1] === classesNames[i]) {
        classesLen = classesLen+1
      }
      else {
        console.log(`classnames ${classesNames[i]}`, classesLen)
        classesLen = 1
      }
    }  
  }
})()