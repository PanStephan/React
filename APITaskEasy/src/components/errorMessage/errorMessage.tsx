import * as React from 'react'

const ErrorMessage = ({errStatus}) => {
  let src : string
  let text : string
  if(!errStatus) {src = './../../public/img/error.png'; text = 'smth wrong'}
  if(errStatus == 404) {src = './../../public/img/404.png'; text= '404'}
  else if(errStatus == 408) {src = './../../public/img/408.png'; text= '408'}
  else if(errStatus == 410) {src = './../../public/img/410.png'; text= '410'}
  else {src = './../../public/img/error.png'; text = 'smth wrong'}
  return (
    <>
      <img src={src} alt=""/>
      <span>{text}</span>
    </>
  )
}

export default ErrorMessage