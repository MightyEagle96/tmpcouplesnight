import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { httpService } from "../../utils/services";
import DataTable from "react-data-table-component";
import { ArrowBack } from "@mui/icons-material";

export default function Attendees() {
  const [registered, setRegistered] = useState([]);

  const ViewRegistration = async () => {
    const path = "attendees";

    const { data } = await httpService.get(path);

    const { attendees } = data;
    if (data) {
      setRegistered(attendees);
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
  return (
    <div>
      <Container>
        <div className="border rounded-3 mt-3 p-3">
          <div className="d-flex justify-content-between">
            <div>
              <Typography variant="h5">ATTENDEES</Typography>
            </div>
            <div>
              <Button color="error" startIcon={<ArrowBack />}>
                Go Back
              </Button>
            </div>
          </div>
          <DataTable
            columns={columns}
            data={registered}
            title={`Registered Persons ${registered.length}`}
            pagination
          />
        </div>
      </Container>
    </div>
  );
}
