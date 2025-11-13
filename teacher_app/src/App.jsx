import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import StartSession from "./pages/StartSession";
import QRScreen from "./pages/QRScreen";
import LiveAttendance from "./pages/LiveAttendance";
import EndSession from "./pages/EndSession";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/start/:courseId"
          element={
            <ProtectedRoute>
              <StartSession />
            </ProtectedRoute>
          }
        />

        <Route
          path="/qr/:sessionId"
          element={
            <ProtectedRoute>
              <QRScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="/live/:sessionId"
          element={
            <ProtectedRoute>
              <LiveAttendance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/end/:sessionId"
          element={
            <ProtectedRoute>
              <EndSession />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
