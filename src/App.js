import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Timeline from "./timeline/Timeline";
import Widgets from "./widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Timeline */}
      <Timeline />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
