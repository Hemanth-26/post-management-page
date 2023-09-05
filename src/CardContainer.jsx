import React, { useState, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import axios from "axios";
import {
  Box,
  TabContext,
  TabPanel,
  TabList,
  Tab,
  PopupDialog,
  Loader,
  Button,
  ConfirmDialog,
} from "./components";
import PostCards from "./PostCards";
import DeletedCards from "./DeletedCards";

function CardContainer({ searchInput }) {
  const [loader, setLoader] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [tabValue, setTabValue] = useState("1");
  const [selectedPostComments, setSelectedPostComments] = useState([]);
  const [postLists, setPostLists] = useState([]);
  const [postFilteredLists, setPostFilteredLists] = useState([]);
  const [deletedPostLists, setDeletedPostLists] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleClickOpen = (id) => {
    setOpenDialog(true);
    getCommentsRequest(id);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleConfirmOpen = () => {
    setOpenConfirmDialog(true);
  };

  const handleConfirmClose = () => {
    setOpenConfirmDialog(false);
  };

  const deletedPosts = (postId) => {
    /**Post Delete functionality */
    let deletedFilterPost = postFilteredLists.map((list) => {
      if (list.id === postId) {
        return {
          ...list,
          active: false,
        };
      }
      return list;
    });
    let deletedPost = postLists.map((list) => {
      if (list.id === postId) {
        return {
          ...list,
          active: false,
        };
      }
      return list;
    });
    let filterDeletedPost = postFilteredLists.filter(
      (list) => list.id === postId
    );

    setDeletedPostLists((prev) => [...prev, filterDeletedPost[0]]);
    setPostLists(deletedPost);
    setPostFilteredLists(deletedFilterPost);
  };

  async function getPostRequest() {
    /**Get Post API data & functionality */
    setLoader(true);
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let data =
      res.data?.length > 0
        ? res.data?.map((list) => {
            return { ...list, active: true };
          })
        : [];
    setPostLists(data);
    let filterSearch = searchInput
      ? data.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : data;

    setPostFilteredLists(filterSearch);
    setDeletedPostLists([]);
    setLoader(false);
  }
  async function getCommentsRequest(postId) {
    /**Get Post Comments API data & functionality */
    setLoader(true);
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    let data = res.data;

    setSelectedPostComments(data);
    setLoader(false);
  }

  useEffect(() => {
    getPostRequest();
  }, []);

  useEffect(() => {
    let filterSearch = searchInput
      ? postLists.filter((item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : postLists;
    setPostFilteredLists(filterSearch);
  }, [searchInput]);

  return (
    <>
      <div className="container-fluid py-md-3 my-3 h-100">
        <div className="row h-100">
          <div className="col-12">
            <TabContext value={tabValue}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                }}
                className="mx-3"
              >
                <TabList onChange={handleChange} aria-label="Cards Panel">
                  <Tab label="Posts" value="1" />
                  <Tab label="Pending Queue" value="2" />
                </TabList>
                <Button onClick={() => handleConfirmOpen()}>
                  <RefreshIcon className="me-2" /> Refresh
                </Button>
              </Box>
              <TabPanel value="1">
                <PostCards
                  cardLists={postFilteredLists}
                  handleClickOpen={handleClickOpen}
                  deletedPosts={deletedPosts}
                />
              </TabPanel>
              <TabPanel value="2">
                <DeletedCards cardLists={deletedPostLists} />
              </TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
      <PopupDialog
        openDialog={openDialog}
        handleClose={handleClose}
        selectedPostComments={selectedPostComments}
      />
      <ConfirmDialog
        openDialog={openConfirmDialog}
        handleClose={handleConfirmClose}
        deletedCards={deletedPostLists}
        refreshData={getPostRequest}
      />
      {loader && <Loader />}
    </>
  );
}

export default CardContainer;
