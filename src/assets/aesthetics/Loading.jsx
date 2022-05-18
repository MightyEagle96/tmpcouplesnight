import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading({ show, color }) {
  return show ? (
    <Spinner size="sm" variant={color ? color : "primary"} animation="border" />
  ) : null;
}
