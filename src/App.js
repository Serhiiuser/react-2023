import './App.css';
import React from 'react';

import {Users,Posts} from "./components";

const App = () => {
  return (
      <div>
        <Users/>
          <Posts/>
      </div>
  );
};

export {App};


