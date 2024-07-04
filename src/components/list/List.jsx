import { useState, useEffect } from "react";
import useJsonFetch from "../../hooks/usejsonfetch/useJsonFetch";
import "./List.css";

function List(props) {
  const { data, loading, error } = useJsonFetch(`${import.meta.env.VITE_REACT_NOTES_URL}/users.json`) // Utilizing useFetch

  if (loading) return (
    <div className="list-container">
      <div>Loading...</div>
    </div>);
  if (error) return (
    <div className="list-container">
      <div>Error: {error}</div>
    </div>);

  return (
    <div className="list-container">
      {data &&
        <ul className="list">
          {data.map((val) => <li id={val.id} className='list-item' key={val.id} onClick={props.onClickHandler}>{val.name}</li>)}
        </ul>
      }
    </div>
  )
}

export default List