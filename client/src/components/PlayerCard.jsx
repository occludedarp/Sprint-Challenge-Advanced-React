import React from 'react';

export const PlayerCard = props => {
  return(
    <div style={{width: "200px", height: "200px", margin: "2% auto", textAlign: "center", boxShadow: "5px 5px 17px 0px", borderRadius: "15px", overflow: "hidden" }}>
      <h2>{props.name}</h2>
      <h3>{props.country}</h3>
      <h3>{props.searchInt}</h3>
    </div>
  )
}