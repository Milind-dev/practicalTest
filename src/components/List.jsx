import React from "react";
import "../css/list.css";

export default function List({ listindex, title, contents, fileimg }) {
  return (
    <div className="listingcontainer">
      <a href={`/pagination/${listindex}`}>{title}</a>
      <p>{contents}</p>
    </div>
  );
}
