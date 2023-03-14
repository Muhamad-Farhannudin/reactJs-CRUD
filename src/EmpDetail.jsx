import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function EmpDetail() {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({}); 


  useEffect(() => {
    fetch("http://localhost:8000/employee/"+empid).then((res)=> {
      return res.json()
    }).then((resp) => {
      empdatachange(resp)
    }).catch((err)=> {
      console.log(err.message)
    })
  }, [])

  return (
    <div>
      <div className="card mx-5" style={{"textAlign" :"left"}}>
        <div className="card-title">
          <h2>Employee Details</h2>
        </div>
        <div className="card-body"></div>
      {empdata && 
        <div>
          <h2>
            The Employee name is : {empdata?.name} ({empdata.id})
          </h2>
          <h3 className="mt-3">Contact Details</h3>
          <h5>Email is : {empdata.email}</h5>
          <h5>Phone is : {empdata.phone}</h5>
          <Link className="btn btn-danger mt-3" to="/">Back to listing</Link>
        </div>
      }
      </div>
    </div>
  );
}
