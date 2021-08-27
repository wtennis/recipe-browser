import React from 'react';


function Home(){


  return (
    <div>
      <form className = "box">
        <div className="field">
          <label className="label">Email</label>
          <div className= "control">
            <input className = "input" type= "email" placeholder= "e.g. alex@example.com"></input>
          </div>
        </div>
        <div className="field">
          <label className="password">Password</label>
            <div className= "control">
              <input className = "input" type= "password" placeholder= "**********"></input>
            </div>
        </div>
        <button className ="button is-primary">Sign in</button>
      </form>
      </div>
      
  );
}

export default Home;
