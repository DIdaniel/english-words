import React, { useState, useEffect } from 'react';
import './App.css';

function PageScroll(props) {
  const {state, setState, page, setPage} = props
  // const [listState, setListState] = useState([]);
  // const [state, setState] = useState([]);


  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${page}`)
      .then(res => res.json())
      .then(json => setState([...state, ...json.message]))
  }, [page])

  return (
    <div>
      
      {
        {state}.map((elem, i)=>
          <div key={i} className="container">
            <img src={elem} alt="doggy"/>            
          </div>
        )
      }
    </div>    
  );
}

export default PageScroll;
