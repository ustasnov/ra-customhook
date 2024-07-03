import { useState, useEffect } from "react";
import useJsonFetch from "../../hooks/usejsonfetch/useJsonFetch";
import "./List.css";

function List(props) {
  const [{ data, isLoading, hasError }] = useJsonFetch(`${import.meta.env.VITE_REACT_NOTES_URL}/users.json`, { initialData: [] });
  const { onClickHandler } = props;

  return (
    <div className="list-container">
      {hasError && <div>hasError</div>}
      {isLoading && !hasError && <div>Loading...</div>}
      {!isLoading && !hasError &&
        <ul className="list">
          {data.map((val) => <li id={val.id} className='list-item' key={val.id} onClick={onClickHandler}>{val.name}</li>)}
        </ul>
      }
    </div>
  )
}

export default List