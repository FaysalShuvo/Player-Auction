
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { name, image, salary, jersey } = props.player;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="single-product col text-center">
        <div className="card border-0">
          <img className="img-thumbnail w-75" src={image} alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 className="card-text">JERSEY: {jersey}</h5>
            <h6 className="card-text">Transfer Value: ${salary}</h6>
            <button
              disabled={isClicked}
              onClick={() => {
                props.addToCartHandler(props.player);
                setIsClicked(true);
              }}
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              Add To Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
