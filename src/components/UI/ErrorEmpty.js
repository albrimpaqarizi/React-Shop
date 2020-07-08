import React from "react";
import { Box, Typography } from "@material-ui/core";

const ErrorEmpty = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      m={3}
    >
      <Typography variant="button" display="block" gutterBottom>
        {props.errorName} is empty
      </Typography>
    </Box>
  );
};

export default ErrorEmpty;
