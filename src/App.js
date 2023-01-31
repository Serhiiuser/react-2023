import './App.css';

import React, {useEffect, useState} from 'react';
import {getLaunches} from "./api/getLaunches";

const App = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        getLaunches().then(resp => setLaunches(resp))
    },[]);

  return (
      <div className={'App'}>
          {launches.filter(item => item.launch_year !=='2020').map(item => {
              return(
                  <div key={item.flight_number}>

                      {item.flight_number} --- {item.mission_name} --- {item.launch_year}
                  </div>
              )
          })}
        
      </div>
  );
};

export default App;


