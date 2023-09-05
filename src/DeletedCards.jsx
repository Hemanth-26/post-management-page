import React from "react";
import { Card, CardContent, Typography } from "./components";

function DeletedCards({ cardLists }) {
  return (
    <div className="row">
      {cardLists.length > 0 ? cardLists.map((item) => (
        <div className="col-lg-4 my-2" key={item.id}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="p" component="div">
                {item.body}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )) : <p>No Pending Queue</p>}
    </div>
  );
}

export default DeletedCards;
