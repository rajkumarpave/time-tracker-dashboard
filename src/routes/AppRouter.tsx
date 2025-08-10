import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import Dashboard from "../pages/Dashboard";
import ProjectTracker from "../pages/ProjectTracker";
import Analyze from "../pages/Analyze";
import CreateProject from "../pages/CreateProject";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Project-Tracker" element={<ProjectTracker />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
