import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";

// A component to set the page title
const SetPageTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const App = () => {
  return (
    <div>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <SetPageTitle title="GW Infra Solutions | Home" />
              <User />
            </>
          }
        />
        {/* Admin route */}
        <Route
          path="/admin"
          element={
            <>
              <SetPageTitle title="Admin | GW Infra Solutions" />
              <Admin />
            </>
          }
        />
        {/* User routes nested under /user */}
        <Route path="/user/*" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
