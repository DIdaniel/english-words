import React, {useRef, useState} from 'react'
import { useHistory } from 'react-router';
import useFetch from '../hooks/useFetch'
import { IDay } from './DayList';

const CreateWord = () => {

  const days:IDay[] = useFetch('http://localhost:4000/days');
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:4000/words/`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          day,
          eng,
          kor,
          isDone : false,
        }),
      }).then(res => {
        if(res.ok) {
          alert('생성이 완료 되었습니다')
          history.push(`/day/${day}`);
          setIsLoading(false);
        }
      })
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

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
