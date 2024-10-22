import SideBar from "./Components/SideBar/SideBar";

const App = () => {
  return (
    <main className="w-full h-screen bg-slate-700 flex">
      <SideBar />
      <div className="flex items-center justify-center" style={{ width: "calc(100vw - 16vw)" }}>
        <h1 className="text-white text-9xl">DASHBOARD</h1>
      </div>
    </main>
  );
};

export default App;
