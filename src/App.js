import { ThemeProvider } from "@material-ui/core";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "./common/Component/LoadingComp";
import theme from "./common/config/MuiTheme";
import BodyWrapper from "./features/BodyWrapper/view";
import Dashboard from "./features/Dashboard/view";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme()}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<BodyWrapper />}>
              <Route index element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" />} />
              {/* <Route path="aboutus" element={<Aboutus />} />
              <Route path="privacypolicy" element={<PrivacyPolicy />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
