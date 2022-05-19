import { Typography } from "@mui/material";
import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer text-white d-flex align-items-center justify-content-center mt-3 ">
      <div className="p-4">
        <Row>
          <Typography
            variant="h6"
            fontWeight="100"
            textAlign={"center"}
            letterSpacing={2}
          >
            Powered by RCCG TMP FCT 1
          </Typography>
          <Typography variant="subtitle2" fontWeight="700" textAlign={"center"}>
            The province of a new glory
          </Typography>
        </Row>
      </div>
    </div>
  );
}
