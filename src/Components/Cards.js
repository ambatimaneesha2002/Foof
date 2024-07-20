import React from 'react'

export default function Cards() {
  return (
    <div>
     <div>
    <div className="card  mt-3" style={{ width: "18rem","maxHeight":"360px"}}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is an food website
        </p>
        <div className="container w-100">
         <select className="m-2 h-100 w-100 bg-success">
            {Array.from(Array(6),(e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
         </select>
         <select className="m-2 h-100 bg-sucess rounded">
            <option value ="half">Half</option>
            <option value ="full">Full</option>
         </select>
         <div  className="d-inline h-100 fs-5">
            total price
         </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}
