import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to="/vans" target="_blank" rel="noopener noreferrer">
        <FaLongArrowAltLeft /> <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>
          </p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
