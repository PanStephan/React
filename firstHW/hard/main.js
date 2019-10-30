let images = [
	'1.jpeg',
  '2.jpeg',
  '3.jpeg',
];

Promise.all(images).then(values => {
  const images = values.map( src  => {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '250px';
    img.style.height = '200px';
    return img
  })
  return images;
}).then( images => {
  setTimeout(() => { //load pic emulation
    images.forEach(el => {
      document.body.appendChild(el)
    })
  }, 1000)
})


