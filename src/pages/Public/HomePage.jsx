import {
  Avatar,
  Button,
  Typography,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../assets/images/logo.jpg";

import { Container, Row } from "react-bootstrap";
import flyer from "../../assets/images/flyer.jpeg";
import { red } from "@mui/material/colors";
import DateCountdown from "../../components/DateCountdown";
import { AccountCircle, EmailRounded, Phone } from "@mui/icons-material";
import InputComponent from "../../components/InputComponent";
import { titles } from "../../utils/labels";
import { httpService } from "../../utils/services";
import Loading from "../../assets/aesthetics/Loading";
import Swal from "sweetalert2";

export default function HomePage() {
  const defaultData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comingAlone: "",
    spouse: "",
    title: "",
    expectation: "",
  };
  const [userData, setUserData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const Register = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        icon: "question",
        title: "Do you wish to submit",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          const path = "register";
          userData.phone = `234${userData.phone.slice(
            1,
            userData.phone.length
          )}`;
          const res = await httpService.post(path, userData);
          if (res) {
            setLoading(false);
            setUserData(defaultData);
          }
        }
      });
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="homePage d-flex justify-content-center align-items-center">
        <div>
          <Typography textAlign={"center"} color="white" gutterBottom>
            THE MASTER'S PLACE FCT 1
          </Typography>
          <div className="d-flex justify-content-center">
            <Avatar src={logo} sx={{ width: 100, height: 100 }} />
          </div>
          <div className="d-none d-md-block">
            <div className="text-center mt-3 text-white">
              <Typography>presents</Typography>
              <Typography variant="h4" fontWeight="200" letterSpacing={2}>
                Together Forever
              </Typography>
              <Typography variant="subtitle1" fontWeight="200">
                COUPLE'S NIGHT AND DINNER
              </Typography>
            </div>
          </div>
          <div className="d-sm-block d-md-none text-white">
            <div className="text-center mt-3">
              <Typography variant="caption">presents</Typography>
              <Typography
                variant="h4"
                color="white"
                fontWeight="200"
                letterSpacing={2}
              >
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
        <div className="d-flex justify-content-center p-4">
          <div className="d-none d-md-block">
            <Typography
              variant="h6"
              fontWeight="700"
              gutterBottom
              color="GrayText"
              textAlign={"center"}
            >
              COUNTDOWN
            </Typography>
            <DateCountdown />
          </div>
          <div className="d-sm-block d-md-none">
            <Typography
              variant="body1"
              fontWeight="700"
              gutterBottom
              color="GrayText"
              textAlign={"center"}
            >
              COUNTDOWN
            </Typography>
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
                <form onSubmit={Register}>
                  <Row>
                    <div className="col-md-6 border-end">
                      <FormControl
                        variant="standard"
                        sx={{ minWidth: 120, marginBottom: 2 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Title
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          name="title"
                          required
                          value={userData.title}
                          onChange={handleChange}
                          label="Age"
                        >
                          {titles.map((t, i) => (
                            <MenuItem key={i} value={t}>
                              {t}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <div className="mb-3">
                        <InputComponent
                          icon={<AccountCircle />}
                          label={"First Name"}
                          name="firstName"
                          handleChange={handleChange}
                          value={userData}
                          required={true}
                        />
                      </div>
                      <div className="mb-3">
                        <InputComponent
                          icon={<AccountCircle />}
                          label={"Last Name"}
                          name="lastName"
                          handleChange={handleChange}
                          value={userData}
                          required={true}
                        />
                      </div>
                      <div className="mb-3">
                        <InputComponent
                          icon={<EmailRounded />}
                          label={"Email Address"}
                          name="email"
                          handleChange={handleChange}
                          value={userData}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <InputComponent
                          icon={<Phone />}
                          label={"Phone"}
                          name="phone"
                          handleChange={handleChange}
                          value={userData}
                          required={true}
                        />
                      </div>
                      <div className="mb-3">
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Will you be coming with your spouse?
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={false}
                            name="comingAlone"
                            onChange={handleChange}
                            value={userData.comingAlone}
                          >
                            <FormControlLabel
                              value="yes"
                              control={<Radio />}
                              label="Yes"
                            />
                            <FormControlLabel
                              value="no"
                              control={<Radio />}
                              label="No"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      {userData.comingAlone === "yes" ? (
                        <div className="mb-3">
                          <InputComponent
                            icon={<AccountCircle />}
                            label={"Spouse name"}
                            name="spouse"
                            handleChange={handleChange}
                            value={userData}
                          />
                        </div>
                      ) : null}
                      <div className="mb-3">
                        <InputComponent
                          label={"Expectations (if any)"}
                          name="expectation"
                          handleChange={handleChange}
                          value={userData}
                          multiline={true}
                          rows={2}
                        />
                      </div>
                      <div className="mb-3">
                        <Button
                          color="error"
                          variant="contained"
                          type="submit"
                          className="me-1"
                        >
                          REGISTER
                        </Button>
                        <Loading show={loading} color="danger" />
                      </div>
                    </div>
                  </Row>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={flyer} alt="img" />
            </div>
          </Row>
        </div>
        <div className="d-sm-block d-md-none">
          <div className="p-3">
            <div className="mt-3 ">
              <div className="mb-4">
                <Typography variant="h5" color={red[500]}>
                  REGISTRATION FORM
                </Typography>
              </div>
              <form onSubmit={Register}>
                <FormControl
                  variant="standard"
                  sx={{ minWidth: 120, marginBottom: 2 }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Title
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    name="title"
                    value={userData.title}
                    onChange={handleChange}
                    label="Age"
                  >
                    {titles.map((t, i) => (
                      <MenuItem key={i} value={t}>
                        {t}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="mb-3">
                  <InputComponent
                    icon={<AccountCircle />}
                    label={"First Name"}
                    name="firstName"
                    handleChange={handleChange}
                    value={userData}
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <InputComponent
                    icon={<AccountCircle />}
                    label={"Last Name"}
                    name="lastName"
                    handleChange={handleChange}
                    value={userData}
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <InputComponent
                    icon={<EmailRounded />}
                    label={"Email Address"}
                    name="email"
                    handleChange={handleChange}
                    value={userData}
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <InputComponent
                    icon={<Phone />}
                    label={"Phone"}
                    name="phone"
                    handleChange={handleChange}
                    value={userData}
                    v
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Will you be coming with your spouse?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={false}
                      name="comingAlone"
                      onChange={handleChange}
                      value={userData.comingAlone}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                {userData.comingAlone === "yes" ? (
                  <div className="mb-3">
                    <InputComponent
                      icon={<AccountCircle />}
                      label={"Spouse Name"}
                      name="spouse"
                      handleChange={handleChange}
                      value={userData}
                    />
                  </div>
                ) : null}
                <div className="mb-3">
                  <InputComponent
                    // icon={<Assessment />}
                    label={"Expectations (if any)"}
                    name="expectation"
                    handleChange={handleChange}
                    value={userData}
                    multiline={true}
                    rows={2}
                  />
                </div>
                <div className="mb-3">
                  <Button
                    color="error"
                    variant="contained"
                    type="submit"
                    className="me-1"
                  >
                    REGISTER
                  </Button>
                  <Loading show={loading} color="danger" />
                </div>
              </form>
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
