import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Page from "react-page-loading";
import { red } from "@mui/material/colors";
import MainRoutes from "./routes/Index";
import Footer from "./components/Footer";

function App() {
  return (
    <Page loader={"bubble-spin"} color={red[500]}>
      <div>
        <MainRoutes />
        <Footer />
      </div>
    </Page>
  );
}

export default App;
