import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "./components";

function PostCards({ cardLists, handleClickOpen, deletedPosts }) {
  return (
    <div className="row">
      {cardLists?.length > 0 ? (
        cardLists.map(
          (item) =>
            item?.active && (
              <div className="col-lg-4 my-2" key={item.id}>
                <Card variant="outlined">
                  <CardContent onClick={() => handleClickOpen(item.id)}>
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="p" component="div">
                      {item.body}
                    </Typography>
                  </CardContent>
                  <CardActions className="justify-content-end">
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => deletedPosts(item.id)}
                    >
                      Delete Post
                    </Button>
                  </CardActions>
                </Card>
              </div>
            )
        )
      ) : (
        <p>No Data to display</p>
      )}
    </div>
  );
}

export default PostCards;
