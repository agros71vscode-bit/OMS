export default function Header() {
  return (
    <header className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <div>
          <h1 className="font-bold text-xl">
            OMS
          </h1>

          <p className="text-sm text-slate-500">
            Operations Management System
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-slate-300"></div>

      </div>

    </header>
  );
}