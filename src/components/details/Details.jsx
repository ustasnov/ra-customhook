import { useState, useEffect, useRef } from "react";
import useJsonFetch from "../../hooks/usejsonfetch/useJsonFetch";
import "./Details.css";

function Details(props) {
  const { info } = props;

  const { data, loading, error } = useJsonFetch(`${import.meta.env.VITE_REACT_NOTES_URL}/${info.id}.json`);

  if (loading) return <div className="user-details"><div>Loading...</div></div>;
  if (error) return <div className="user-details"><div>Error: {error}</div></div>;

  return (
    <>
      {data && <div className="user-details">
        <img className="details details-avatar" src={data.avatar} alt="Avatar"></img>
        <div className="details details-name">{data.name}</div>
        <div className="details details-city">City: {data.details.city}</div>
        <div className="details details-company">Company: {data.details.company}</div>
        <div className="details details-position">Position: {data.details.position}</div>
      </div>}
    </>
  )
}

export default Details;