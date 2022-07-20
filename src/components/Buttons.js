import React from "react";

function Buttons({house, active, handleClick}) {
  return (
    <div>
      {house.map((house, index) => {
        return (
          <button
            className={
              active === house.name ? "active navButton" : "navButton"
            }
            key={index}
            onClick={() => handleClick(house.name)}
          >
            <p>{house.name}</p>
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
