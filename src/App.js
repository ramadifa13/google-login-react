import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import HandleGoogleCallback from "./utils/callback";
import { QueryClientProvider, QueryClient } from "react-query";
import './App.css'
import NotFoundPage from "./pages/NotFound";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<ProfilePage />} path="/" exact />
          </Route>
          <Route element={<LoginPage />} path="/login" />
          <Route
            element={<HandleGoogleCallback />}
            path="/api/auth/google/callback"
          />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
