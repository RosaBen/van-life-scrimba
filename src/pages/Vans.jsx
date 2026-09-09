import { useState, useEffect } from "react";
import "../assets/scripts/server";
import capitalizeFirstChar from "../assets/scripts/utils";

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const listVans = vans.map((item, index) => {
    return (
      <div className="card" key={index}>
        <img src={item.imageUrl} alt={item.name} />
        <div className="card-infos">
          <p>{item.name}</p>
          <p>
            {`$${item.price}`}
            <span>/day</span>{" "}
          </p>
        </div>
        <button className="simple btn">{capitalizeFirstChar(item.type)}</button>
      </div>
    );
  });
  return (
    <section className="vans-page">
      <h1>Explore our van options</h1>
      <div className="filter-btns">
        <div className="btns">
          <button className="btn">Simple</button>
          <button className="btn">Luxury</button>
          <button className="btn">Rugged</button>
        </div>
        <button className="clear-btn">Clear filters</button>
      </div>
      <div className="list-vans">{listVans}</div>
    </section>
  );
}
