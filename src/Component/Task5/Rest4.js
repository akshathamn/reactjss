import React from 'react'

const Rest4 = ({ hello }) => {
  return (
    <div>
      <center><h1>Contact List 2</h1></center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{hello.userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{hello.id}</h6>
          <p className="card-text">{hello.title}</p>
          <p className="card-text">{hello.body}</p>
        </div>
      </div>
    </div>
  )
};

export default Rest4;