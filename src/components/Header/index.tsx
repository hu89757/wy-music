import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./index.scss";

function Header() {
  const header: Array<any> = [
    { id: 0, name: "我的", path: "/mine" },
    { id: 1, name: "发现", path: "/index" },
    { id: 2, name: "云村", path: "/index" },
    { id: 3, name: "视频", path: "/index" },
  ];
  let history = useHistory();

  let [current, setCurrent] = useState({ id: 1, name: "发现", path: "/index" });
  function handleClick(index: number): void {
    setCurrent((current = header[index]));
    history.push(current.path);
  }
  return (
    <div className="header">
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-caidan"></use>
      </svg>
      <div className="header-content">
        {header.map((item, index) => {
          return (
            <div
              key={index}
              className={current.id === index ? "current" : ""}
              onClick={() => handleClick(index)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-sousuo"></use>
      </svg>
    </div>
  );
}

export default Header;
