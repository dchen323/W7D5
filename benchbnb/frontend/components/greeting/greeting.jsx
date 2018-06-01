import React from 'react';
import {Link} from 'react-router-dom'
const Greeting = ({user, logout}) => (
  user ?
  (<div>
      <h1>Hi, {user.username}</h1>
      <button onClick={props.logout} />
    </div>) :
    (<div>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log In</Link>
      </div>)
);

export default Greeting;
