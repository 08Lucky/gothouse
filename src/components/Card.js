import React from 'react'

function Card({people}) {
  return (
    <div>
        {people && people.people &&
        people.people.map((people, index) => {
          return (
            <div key={index}>
              <h3>{people.name}</h3>
              <p>{people.description}</p>
            </div>
          );
        })}
    </div>
  )
}

export default Card