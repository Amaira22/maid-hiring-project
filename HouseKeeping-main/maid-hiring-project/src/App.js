import "./App.css";
import "./style.css";

import { Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import Footer from "./Component/Header/Footer";

import Home from "./Component/MainComponent/Home";
import About from "./Component/MainComponent/About";
import Contact from "./Component/MainComponent/Contact";
import Service from "./Component/MainComponent/Service";
import JobDetails from "./Component/Maid/JobDetails";
import Login from "./Component/MainComponent/Login";

import ClientRegister from "./Component/Auth/ClientRegister";
import MaidRegister from "./Component/Auth/MaidRegister";

/* Client Pages */
import BrowseMaids from "./Component/Client/BrowseMaids";
import ClientProfile from "./Component/Client/ClientProfile";
import HireRequests from "./Component/Client/HireRequests";
import SavedMaids from "./Component/Client/SavedMaids";
import ClientDashboard from "./Component/Client/ClientDashboard";

/* Maid Pages */
import MaidDashboard from "./Component/Maid/MaidDashboard";
import MaidProfile from "./Component/Maid/MaidProfile";
import IncomingRequests from "./Component/Maid/IncomingRequests";
import AcceptedJobs from "./Component/Maid/AcceptedJobs";
import ClientDetails from "./Component/Maid/ClientDetails";

function App() {
  return (
    <div>
      <Header />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />

        {/* Login */}
        <Route path="/Login" element={<Login />} />

        {/* Registration */}
        <Route
          path="/register/client"
          element={<ClientRegister />}
        />

        <Route
          path="/register/maid"
          element={<MaidRegister />}
        />

        {/* Client Pages */}
        <Route
          path="/browse-maids"
          element={<BrowseMaids />}
        />

        <Route
          path="/client-profile"
          element={<ClientProfile />}
        />

        <Route
          path="/hire-requests"
          element={<HireRequests />}
        />

        <Route
          path="/saved-maids"
          element={<SavedMaids />}
        />

        {/* Maid Pages */}
        <Route
          path="/maid-dashboard"
          element={<MaidDashboard />}
        />

        <Route
          path="/maid-profile"
          element={<MaidProfile />}
        />

        <Route
          path="/incoming-requests"
          element={<IncomingRequests />}
        />

        <Route
          path="/accepted-jobs"
          element={<AcceptedJobs />}
        />
        <Route
  path="/job-details/:id"
  element={<JobDetails />}
/>
<Route
  path="/client-details"
  element={<ClientDetails />}
/>

<Route
  path="/client-dashboard"
  element={<ClientDashboard />}
/>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;