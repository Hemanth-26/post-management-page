import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { SearchBox, Typography } from "./components/index";

export default function Header({ searchInput, onChangeSearch }) {
  const handleOnSearch = (e) => {
    onChangeSearch(e.target.value);
    localStorage.setItem("searchInput", e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            paddingTop: { xs: "0.5rem", sm: "0" },
            paddingBottom: { xs: "0.5rem", sm: "0" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginBottom: { xs: "0.3rem", sm: "0" } }}
          >
            Post Management Page
          </Typography>
          <SearchBox
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchInput || localStorage.getItem("searchInput")}
            onChange={handleOnSearch}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
