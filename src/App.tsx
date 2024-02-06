import React from "react";
import "./App.css";
import { Box, TextField, Typography } from "@mui/material";
import BasicTabs from "./components/Tabss";
import ClickOutside from "./components/ClickOutside";

function App() {
  const [shown, setShown] = React.useState(false);

  return (
    <ClickOutside onClick={() => setShown(false)}>
      <Box
        sx={{
          position: "relative",
          width: "500px",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          variant="outlined"
          onFocus={() => {
            setShown(true);
          }}
          // onBlur={() => {
          //   setShown(false);
          // }}
        />
        {shown && (
          <Box
            sx={{
              bgcolor: "primary.main",
              position: "absolute",
              color: "primary.contrastText",
            }}
          >
            <BasicTabs />
          </Box>
        )}
      </Box>
    </ClickOutside>
  );
}

export default App;
