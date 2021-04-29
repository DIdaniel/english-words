import React from 'react'
import { useHistory } from 'react-router';
import useFetch from '../hooks/useFetch'

const CreateDay = () => {

  const days = useFetch('http://localhost:4000/days');
  const history = useHistory();

  const addDay = () => {
    fetch(`http://localhost:4000/days/`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        day : days.length + 1
      }),
    })
    .then(res => {
      if(res.ok) {
        alert('생성이 완료 되었습니다')
        history.push(`/`)
      }
    })
  }

  return (
    <div>
      <h3>현재 일 수 : {days.length}일</h3>
      <button onClick={addDay}>DAY  추가</button>
    </div>
  )
}

export default CreateDay
