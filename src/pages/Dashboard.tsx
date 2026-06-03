export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Operations Management System
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back to OMS
          </p>
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-sm text-slate-500">
              Activities
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-sm text-slate-500">
              Tasks
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-sm text-slate-500">
              Meetings
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-sm text-slate-500">
              Trainings
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>

        </div>

        {/* Modules */}

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              Activity Log
            </h2>
            <p className="text-slate-500 mt-2">
              Record daily activities and achievements
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              Appointment Manager
            </h2>
            <p className="text-slate-500 mt-2">
              Manage appointments and schedules
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              Minutes Meeting
            </h2>
            <p className="text-slate-500 mt-2">
              Store meeting records and action plans
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              Task Tracker
            </h2>
            <p className="text-slate-500 mt-2">
              Track open and completed tasks
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              Training Management
            </h2>
            <p className="text-slate-500 mt-2">
              Manage training sessions and attendance
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">
              Dashboard Analytics
            </h2>
            <p className="text-slate-500 mt-2">
              KPI reporting and performance insights
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}