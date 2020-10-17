import React from 'react';

function List({name,image}){
  return (
    <div>
      <p>{name}</p>
      <img src={image}/>
    </div>
  )
}

const thumb=[
  {
    name:'(FULL) [연애혁명] EP.1 공주와 왕자, 우린 운명(?)이야 [2020.09.01]',
    image:'https://t1.daumcdn.net/thumb/C240x140.fjpg.q75/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaotv%2FASSET%2Fwarhol_asset%2Fvod_thumbnail%2F464536ccd46767a6496f1b294959232d809f3eb0'
  },
  {
    name:'(FULL) [연애혁명] EP.2 사랑은... 타이밍이지?! [2020.09.03]',
    image:'https://t1.daumcdn.net/thumb/C240x140.fjpg.q75/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaotv%2FASSET%2Fwarhol_asset%2Fvod_thumbnail%2F0ff824072a0c5c787543893760f5662d84735d99'
  },
  {
    name:'(FULL) [연애혁명] EP.3 그날 수련회에서 생긴 일 [2020.09.10]',
    image:'https://t1.daumcdn.net/thumb/C240x140.fjpg.q75/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaotv%2FASSET%2Fwarhol_asset%2Fvod_thumbnail%2Fee4cb5fe8ba9b65f2b163782851ac0cd8af5da85'
  },
  {
    name:'(FULL) [연애혁명] EP.4 수련회 고백(GO BACK) 사건 [2020.09.17]',
    image:'https://t1.daumcdn.net/thumb/C240x140.fjpg.q75/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaotv%2FASSET%2Fwarhol_asset%2Fvod_thumbnail%2F062c73f2348501184ff17ac4945b0ec1aec70e19'
  }
]

function App() {
  return (
    <div>
      { thumb.map(list => <List name={list.name} image={list.image}/>) }
    </div>
  );
}

export default App;
