import { useEffect, useState } from "react";
import API from "../api/api";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Courses() {
  const { user, logout } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/teacher/sessions/courses")
      .then((res) => setCourses(res.data.courses))
      .catch(() => alert("Failed to load courses"));
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>

      <h2 className="text-xl mb-4">Your Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <Link
            key={c.id}
            to={`/start/${c.id}`}
            className="p-4 bg-white shadow rounded hover:bg-gray-100"
          >
            <h3 className="text-lg font-bold">{c.name}</h3>
            <p className="text-gray-600">{c.code}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
