import { Button, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import { httpService } from "../../utils/services";
import DataTable from "react-data-table-component";
import { ArrowBack } from "@mui/icons-material";
import Loading from "../../assets/aesthetics/Loading";
import { red } from "@mui/material/colors";

export default function Attendees() {
  const [registered, setRegistered] = useState([]);
  const [loading, setLoading] = useState(false);

  const ViewRegistration = async () => {
    try {
      setLoading(true);
      const path = "attendees";
      const { data } = await httpService.get(path);

      if (data) {
        setLoading(false);
        const { attendees } = data;
        setRegistered(attendees);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    ViewRegistration();
  }, []);

  const columns = [
    { name: "Title", selector: (row) => row.title },
    { name: "First Name", selector: (row) => row.firstName },
    { name: "Last Name", selector: (row) => row.lastName },
    { name: "Email", selector: (row) => row.email },
    { name: "Phone", selector: (row) => row.phone },
  ];

  const ExpandedComponent = ({ data }) => {
    return (
      <Alert variant="danger">
        <Stack direction={"row"} spacing={2}>
          <div className="border-end p-3">
            <Typography variant="overline">spouse name</Typography>
            <Typography variant="h6">
              {data.spouse ? data.spouse : "-"}
            </Typography>
          </div>
          <div className="p-3">
            <Typography variant="overline">Expectations</Typography>
            <Typography variant="h6">
              {data.expectation ? data.expectation : "-"}
            </Typography>
          </div>
        </Stack>
      </Alert>
    );
  };
  return (
    <div>
      <Container>
        <div className="border rounded-3 mt-3 p-3">
          <div className="d-flex justify-content-between">
            <div>
              <Typography variant="h5" color={red[700]}>
                ATTENDEES
              </Typography>
            </div>
            <div>
              <Button
                color="error"
                startIcon={<ArrowBack />}
                onClick={() => window.location.assign("/")}
              >
                Go Back
              </Button>
              <Loading show={loading} color="error" />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={registered}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            title={`Registered Persons ${registered.length}`}
            pagination
          />
        </div>
      </Container>
    </div>
  );
}
