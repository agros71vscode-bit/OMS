import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import ActivityLog from "./pages/ActivityLog";
import AppointmentManager from "./pages/AppointmentManager";
import MinutesMeeting from "./pages/MinutesMeeting";
import TaskTracker from "./pages/TaskTracker.tsx";
import TrainingManagement from "./pages/TrainingManagement";

function App() {
  return (
    // ⬇️ CHANGE: Added basename="/OMS" so React Router knows your app lives under /OMS on GitHub Pages
    <BrowserRouter basename="/OMS">

      <Routes>

        <Route element={<MainLayout />}>

          {/* Home route */}
          <Route path="/" element={<Dashboard />} />

          {/* Activities route */}
          <Route
            path="/activities"
            element={<ActivityLog />}
          />

          {/* Appointments route */}
          <Route
            path="/appointments"
            element={<AppointmentManager />}
          />

          {/* Meetings route */}
          <Route
            path="/meetings"
            element={<MinutesMeeting />}
          />

          {/* Tasks route */}
          <Route
            path="/tasks"
            element={<TaskTracker />}
          />

          {/* Training route */}
          <Route
            path="/training"
            element={<TrainingManagement />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
