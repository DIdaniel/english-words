import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateDay from './components/CreateDay';
import CreateWord from './components/CreateWord';
import Day from './components/Day';
import DayList from './components/DayList';
import EmptyPage from './components/EmptyPage';
import Header from './components/Header';

//https://www.youtube.com/watch?v=iCdcSti70lI&list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-&index=11
// 11번 할 차례 react

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <DayList />
        </Route>
        <Route path="/day/:day">
          <Day />
        </Route>
        <Route path="/create_word">
          <CreateWord />
        </Route>
        <Route path="/create_day">
          <CreateDay />
        </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
