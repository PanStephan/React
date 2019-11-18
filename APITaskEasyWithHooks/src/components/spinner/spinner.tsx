
import * as React from 'react'
import './spinner.scss'

const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-ellipsis"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
    </div>
  ) 
}

export default Spinner