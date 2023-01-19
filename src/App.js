import './App.css';

import React from 'react';
import Simpson from "./components/Simpsons/Simpson";

const App = () => {
  return (
      <div>
        <Simpson name = {'Homer'} surname = {'Simpson'} image = {'https://www.sostav.ru/app/public/images/news/2015/12/18/Screenshot_2.jpg?rand=0.2807936074677855'}/>
        <Simpson name = {'Marge'} surname = {'Simpson'} image = {'https://i.pinimg.com/474x/87/5c/fd/875cfd4fdddef41ecb0a6a9b11fab0b7--tv-moms-best-mother.jpg'}/>
        <Simpson name = {'Bart'} surname = {'Simpson'} image = {'https://2x2tv.ru/upload/iblock/aad/aadc5d77ab52efcc921f3e1a257e11ec.jpg'}/>
        <Simpson name = {'Lisa'} surname = {'Simpson'} image = {'https://cdn.costumewall.com/wp-content/uploads/2015/09/lisa-simpson.jpg'}/>
        <Simpson name = {'Maggi'} surname = {'Simpson'} image = {'https://ru.seaicons.com/wp-content/uploads/2015/07/Maggie-Simpson-icon.png'}/>
      </div>
  );
};

export default App;


