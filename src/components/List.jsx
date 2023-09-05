import React, { useState } from "react";

export default function List({ listindex, title, contents ,fileimg}) {
  
    return (
    <div>
      <a href={`/pagination/${listindex}`}>{title}</a>
      <p>{contents}</p>
      <img style={{width:"31vh"}} src={fileimg} />
      {/* <Listcontent  /> */}
    </div>
  );
}
