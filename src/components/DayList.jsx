import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const DayList = () => {

  const days= useFetch("http://localhost:4000/days")

  if(days.length === 0) {
    return (
      <span>LOADING....</span>
    )
  }

  return (
    <>
    <ul className="list_day">
      {
        days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>
              Day{day.day}
            </Link>
          </li>
        ))
      }
    </ul>
  </>
  )
}

export default DayList
