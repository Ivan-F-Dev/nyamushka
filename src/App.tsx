import React from 'react';
import s from './App.module.scss'
import Card from "./components/Card/Card";

function App() {
  return (
    <main className={s.App}>
      <div className={s.App__container}>
        <h1 className={s.App__title}>Ты сегодня покормил кота?</h1>
          <div className={s.App__cardsWrapper}>
              <Card/>
              <Card/>
              <Card/>
          </div>
      </div>
    </main>
  );
}

export default App;
