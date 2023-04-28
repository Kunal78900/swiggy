import React from "react";

export default function Card() {
  return (
    <div>
      <div className="BODY">
        <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Pizza</p>
            <div className="container w-100"> </div>
            <select className="m-2 h-100 rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 rounded">
              <option value="half"> Half</option>
              <option value="half"> Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
