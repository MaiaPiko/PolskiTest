import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';

import "./DD.css"

const _reorderForward = (l, start, end) => {
  const temp = l[start];

  for (let i = start; i < end; i++) {
    if (i + 1 < l.length) l[i] = l[i + 1];
  }

  l[end - 1] = temp;

  return l;
};

const _reorderBackward = (l, start, end) => {
  const temp = l[start];

  for (let i = start; i > end; i--) {
    if (i > 0) l[i] = l[i - 1];
  }

  l[end] = temp;

  return l;
};

const reorderList = (l, startIndex, endIndex) => {
  if (startIndex < endIndex)
    return _reorderForward(l.slice(), startIndex, endIndex);
  else if (startIndex > endIndex)
    return _reorderBackward(l.slice(), startIndex, endIndex);
  else return l;
};

export default function DrDr() {
  const [items, setItems] = useState([
    "List do autora",
    "Lektura w wannie",
    "3",
    "4",
    "5",
  ]);

  const [dragged, setDragged] = useState(null);
  const [mouse, setMouse] = useState([0, 0]);
  const [closestDropZone, setClosestDropZone] = useState(0);
  const [finalOrder, setFinalOrder] = useState([]);

  useEffect(() => {
    const handler = () => {
      if (dragged !== null) {
        setDragged(null);
        setItems((items) => reorderList(items, dragged, closestDropZone));
      }
    };

    document.addEventListener("mouseup", handler);
    document.addEventListener("touchend", handler);

    return () => {
      document.removeEventListener("mouseup", handler);
      document.removeEventListener("touchend", handler);
    };
  });

  useEffect(() => {
    const handler = (e) => {
      setMouse([e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY]);
    };

    document.addEventListener("mousemove", handler);
    document.addEventListener("touchmove", handler);

    return () => {
      document.removeEventListener("mousemove", handler);
      document.removeEventListener("touchmove", handler);
    };
  }, []);

  useEffect(() => {
    if (dragged !== null) {
      const elements = Array.from(document.getElementsByClassName("drop-zone"));
      const positions = elements.map((e) => e.getBoundingClientRect().top);
      const absDifferences = positions.map((v) => Math.abs(v - mouse[1]));
      let result = absDifferences.indexOf(Math.min(...absDifferences));

      if (result > dragged) result += 1;

      setClosestDropZone(result);
    }
  }, [dragged, mouse]);

  const handleShowOrder = () => {
    setFinalOrder(items);
  };

  return (
    <>
      {dragged !== null && (
        <div
          className="floating list-item"
          style={{
            left: `${mouse[0]}px`,
            top: `${mouse[1]}px`,
            backgroundColor: "white",
            border: "1px solid black",
            padding: "0.3rem",
            zIndex: "999",
            pointerEvents: "none",
          }}
        >
          <p>{items[dragged]}</p>
        </div>
      )}
      <Card className="paper" sx={{width:"min-content", p:5}}>
        <div
          key={`0-drop-zone-a`}
          className=
          {`list-item drop-zone ${dragged === null || closestDropZone !== 0 ? "hidden" : ""}`}
        />
        {items.map((v, i) => (
          <React.Fragment key={v}>
            {dragged !== i && (
              <>
                <div
                  className="list-item"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setDragged(i);
                    setClosestDropZone(i);
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    setDragged(i);
                    setClosestDropZone(i);
                  }}
                >
                  <p>{v}</p>
                </div>

                <div
                  key={`${v}-drop-zone`}
                  className={`list-item drop-zone ${
                    dragged === null || closestDropZone !== i + 1 ? "hidden" : ""
                  }`}
                />
              </>
            )}
          </React.Fragment>
        ))}
      </Card>
      <button onClick={handleShowOrder}>Show Final Order</button>
      <div>
        <strong>Final Order: </strong>
        {finalOrder.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  );
}
