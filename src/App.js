import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "./common/Component/LoadingComp";
import BodyWrapper from "./features/BodyWrapper/view";
import Dashboard from "./features/Dashboard/view";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<BodyWrapper />}>
          <Route index element={<Dashboard />} />
          <Route path="aboutus" element={<Dashboard />} />
          <Route path="privacypolicy" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
