import React from 'react';
import s from './App.module.scss'
import Card from "./components/Card/Card";
import data from "./cardsData.json"

function App() {

  //3. Информация о продукте может меняться.
  //Этот пункт не говорит что конкретно и как может меняться, поэтому заложил в карточки максимальную вариативность.
  //На каждое из 4-х состояний карточки по своему пропсу с нужным текстом.
  //На мой взгляд это излишне, но и третий пункт не конкретный), поэтому так.

  return (
    <main className={s.App}>
      <div className={s.App__container}>
        <h1 className={s.App__title}>Ты сегодня покормил кота?</h1>
          <div className={s.App__cardsWrapper}>
              <Card disabled={false} defaultInfo={data.fst.defaultInfo} selectedInfo={data.fst.selectedInfo} selectedHoverInfo={data.fst.selectedHoverInfo} disabledInfo={data.fst.disabledInfo} />
              <Card disabled={false} defaultInfo={data.scd.defaultInfo} selectedInfo={data.scd.selectedInfo} selectedHoverInfo={data.scd.selectedHoverInfo} disabledInfo={data.scd.disabledInfo}/>
              <Card disabled={true} defaultInfo={data.trd.defaultInfo} selectedInfo={data.trd.selectedInfo} selectedHoverInfo={data.trd.selectedHoverInfo} disabledInfo={data.trd.disabledInfo}/>
          </div>
      </div>
    </main>
  );
}

export default App;
