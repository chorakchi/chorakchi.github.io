import React from "react";
import { Card } from "./../../shared";

export const Experience = ({ ...props }) => {
  return (
    <div>
      {props.data.card.map((item, index) => (
        <Card
          title={item.title}
          context={item.date}
          key={index}
          footer={
            <React.Fragment>
              {item.company}
              <br />
              {item.city}
            </React.Fragment>
          }
          sideLabel={item.lastpositionFlag ? "Last Position" : ""}
        />
      ))}
    </div>
  );
};
