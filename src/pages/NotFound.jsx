import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <div>
      <Container>
        <Typography variant="h4" textAlign={"center"}>
          PAGE NOT FOUND
        </Typography>
      </Container>
    </div>
  );
}
