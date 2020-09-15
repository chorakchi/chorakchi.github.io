import React from "react";
import { Card } from "./../../share";

export const Experience = ({ ...props }) => {
  return (
    <div>
      {props.data.card.map((item) => (
        <Card
          title={item.title}
          context={item.date}
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
