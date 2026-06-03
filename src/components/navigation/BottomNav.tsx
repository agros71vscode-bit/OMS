import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaCalendarAlt,
  FaTasks,
  FaGraduationCap,
} from "react-icons/fa";

export default function BottomNav() {
  const location = useLocation();

  const menu = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Activity",
      path: "/activities",
      icon: <FaClipboardList />,
    },
    {
      name: "Appointment",
      path: "/appointments",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "Training",
      path: "/training",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">

      <div className="flex justify-around py-3">

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center text-xs ${
              location.pathname === item.path
                ? "font-bold"
                : ""
            }`}
          >
            <span className="text-xl">
              {item.icon}
            </span>

            {item.name}
          </Link>
        ))}

      </div>

    </div>
  );
}