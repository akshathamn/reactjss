import React from 'react'

    const Restfultask2 = ({ hello }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{hello.login}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{hello.id}</h6>
                <p className="card-text">{hello.node_id}</p>
                <p className="card-text">{hello.url}</p>
                <p className="card-text">{hello.name}</p>
              
              </div>
            </div>
        </div>
      )
    };

    export default Restfultask2;