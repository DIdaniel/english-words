import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

const Day = () => {

  const {day} = useParams();
  const words = useFetch(`http://localhost:4000/words?day=${day}`)

  return (
    <>
    <h2>Day {day}</h2>
    {words.length === 0 && <span>LOADING...</span> }
    <table>
      <tbody>
        {words.map( word => (
          <Word word={word} key={word.id} />
        ))}
      </tbody>
    </table>      
    </>
  )
}

export default Day
