import Terminal from "./components/Terminal";

function App() {
  return (
    <div className="h-screen overflow-y-auto overflow-auto">
      <Terminal userName="guest" deviceName="geloramos.vercel.app" />
    </div>
  );
}

export default App;
