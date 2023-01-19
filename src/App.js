import './App.css';

import React from 'react';
import Simpson from "./components/Simpson/Simpson";
import Characters from "./components/Characters/Characters";

const App = () => {
  return (
      <div>
        <Simpson name = {'Homer'} surname = {'Simpson'} image = {'https://www.sostav.ru/app/public/images/news/2015/12/18/Screenshot_2.jpg?rand=0.2807936074677855'}/>
        <Simpson name = {'Marge'} surname = {'Simpson'} image = {'https://i.pinimg.com/474x/87/5c/fd/875cfd4fdddef41ecb0a6a9b11fab0b7--tv-moms-best-mother.jpg'}/>
        <Simpson name = {'Bart'} surname = {'Simpson'} image = {'https://2x2tv.ru/upload/iblock/aad/aadc5d77ab52efcc921f3e1a257e11ec.jpg'}/>
        <Simpson name = {'Lisa'} surname = {'Simpson'} image = {'https://cdn.costumewall.com/wp-content/uploads/2015/09/lisa-simpson.jpg'}/>
        <Simpson name = {'Maggi'} surname = {'Simpson'} image = {'https://ru.seaicons.com/wp-content/uploads/2015/07/Maggie-Simpson-icon.png'}/>


          <Characters name = {'Rick Sanchez'} status = {'"Alive"'} species={"Human"} gender={'Male'} image = {'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
          <Characters name = {' Morty Smith'} status = {'"Alive"'} species={"Human"} gender={'Male'} image = {'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
          <Characters name = {'Summer Smith'} status = {'"Alive"'} species={"Human"} gender={'Female'} image = {'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
          <Characters name = {'Beth Smith'} status = {'"Alive"'} species ={"Human"} gender={'Female'}image = {'https://rickandmortyapi.com/api/character/avatar/4.jpe'}/>
          <Characters name = {'Jerry Smith'} status = {'"Alive"'} species={"Human"} gender={'Male'} image = {'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
          <Characters name = {'Abadango Cluster Princess'} status = {'"Alive"'} species={"Alien"} gender={'Female'} image = {'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>

      </div>


  );
};

export default App;


