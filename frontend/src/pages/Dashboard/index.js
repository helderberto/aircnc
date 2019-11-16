import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { checkPrice } from "../../utils";

import "./styles.css";

function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    (async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: {
          user_id
        }
      });

      setSpots(response.data);
    })();
  }, []);

  function renderSpot(spot) {
    return (
      <li key={spot._id}>
        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
        <strong>{spot.company}</strong>
        <span>{checkPrice(spot.price)}</span>
      </li>
    );
  }

  return (
    <>
      <ul className="spot-list">{spots.map(renderSpot)}</ul>

      <Link to="/new">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}

export default Dashboard;
