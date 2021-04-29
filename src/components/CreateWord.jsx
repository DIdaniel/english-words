import React, {useRef, useState} from 'react'
import { useHistory } from 'react-router';
import useFetch from '../hooks/useFetch'

const CreateWord = () => {

  const days = useFetch('http://localhost:4000/days');
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:4000/words/`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          day : dayRef.current.value,
          eng : engRef.current.value,
          kor : korRef.current.value,
          isDone : false
        }),
      })
      .then(res => {
        if(res.ok) {
          alert('생성이 완료 되었습니다')
          history.push(`/day/${dayRef.current.value}`);
          setIsLoading(false);
        }
      })
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>ENG</label>
        <input type="text" placeholder="ex) computer" ref={engRef}/>
      </div>
      <div className="input_area">
        <label>KOR</label>
        <input type="text" placeholder="ex) 컴퓨터" ref={korRef}/>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {
            days.map(day => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))
          }
        </select>
      </div>
      <button style={{opacity: isLoading ? 0.3 : 1,}}>{isLoading ? "저장 중..." :  "저장!"}</button>
    </form>
  )
}

export default CreateWord
