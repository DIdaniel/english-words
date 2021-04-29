import React, { useState } from 'react'

interface Iprops {
  word: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

const Word = ({word: w}: Iprops) => {

  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow= () => {
    setIsShow(!isShow)
  }

  const toggleDone = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:4000/words/${word.id}`, {
      method : "PUT",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        ...word,
        isDone : !isDone,
      }),
    })
    .then(res => {
      if(res.ok) {
        setIsDone(!isDone);
      }
    })
  }

  function del() {
    if(window.confirm('YOU WANNA DELETE?')){
      fetch(`http://localhost:4000/words/${word.id}`, {
        method: "DELETE",
      })
        .then(res => {
          if(res.ok) {
            setWord({
            ...word,
            id: 0,
          })
          }
        })
    }
  }

  if(word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input
          type="checkbox"
          onChange={toggleDone}
        />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? '뜻 보기' : '숨기기'}</button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  )
}

export default Word
