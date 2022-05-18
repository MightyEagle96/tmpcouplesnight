import {
  Avatar,
  Button,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
} from "@mui/material";
import React from "react";
import "./HomePage.css";
import logo from "../../assets/images/logo.jpg";

import { Container, Row } from "react-bootstrap";
import flyer from "../../assets/images/flyer.jpeg";
import { red } from "@mui/material/colors";
import DateCountdown from "../../components/DateCountdown";
import { AccountCircle, EmailRounded, Phone } from "@mui/icons-material";

export default function HomePage() {
  return (
    <div>
      <div className="homePage d-flex justify-content-center align-items-center">
        <div>
          <div className="d-flex justify-content-center">
            <Avatar src={logo} sx={{ width: 100, height: 100 }} />
          </div>
          <div className="d-none d-md-block">
            <div className="text-center mt-3">
              <Typography variant="h4" color="white" fontWeight="200">
                Together Forever
              </Typography>
              <Typography variant="subtitle1" color="white" fontWeight="200">
                COUPLE'S NIGHT AND DINNER
              </Typography>
            </div>
          </div>
          <div className="d-sm-block d-md-none">
            <div className="text-center mt-3">
              <Typography variant="h4" color="white" fontWeight="200">
                Together Forever
              </Typography>
              <Typography variant="subtitle1" color="white" fontWeight="200">
                COUPLE'S NIGHT AND DINNER
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="d-flex justify-content-center p-3">
          <div className="d-none d-md-block">
            <DateCountdown />
          </div>
          <div className="d-sm-block d-md-none">
            <DateCountdown size={80} variant="body1" />
          </div>
        </div>

        <div className="d-none d-md-block">
          <Row className="mb-3">
            <div className="col-md-6">
              <div className="mt-3">
                <div className="mb-4">
                  <Typography variant="h5" color={red[500]}>
                    REGISTRATION FORM
                  </Typography>
                </div>
                <div className="mb-3">
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      First Name
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className="mb-3">
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Last Name
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className="mb-3">
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Email
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailRounded />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className="mb-3">
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Phone
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>

                <div className="mb-3">
                  <Button color="error" variant="contained">
                    REGISTER
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={flyer} alt="img" />
            </div>
          </Row>
        </div>
        <div className="d-sm-block d-md-none">
          <div className="d-flex justify-content-center">
            <div className="mt-3 ">
              <div className="mb-4">
                <Typography variant="h5" color={red[500]}>
                  REGISTRATION FORM
                </Typography>
              </div>
              <div className="mb-3">
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    First Name
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="mb-3">
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Last Name
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="mb-3">
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailRounded />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="mb-3">
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Phone
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div className="mb-3">
                <Button color="error" variant="contained">
                  REGISTER
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={flyer} alt="img" />
          </div>
        </div>
      </Container>
    </div>
  );
}
