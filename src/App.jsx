import { Routes, Route } from "react-router-dom";
import Login from "./presentation/ui/pages/Login";
import WebSocketPage from "./presentation/ui/pages/WebSocketPage";
import MainLayout from "./presentation/ui/templates/MainLayout";
import HomePage from "./presentation/ui/pages/HomePage";
import DevicePage from "./presentation/ui/pages/DevicePage"
import EmergencyPage from "./presentation/ui/pages/EmergencyPage";
import Register from "./presentation/ui/pages/Register";
import UsersPage from "./presentation/ui/pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/devices" element={<DevicePage/>}/>
        <Route path="/realTimeData" element={<WebSocketPage/>}/>
        <Route path="/emergency" element={<EmergencyPage/>}/>
        <Route path="/usersList" element={<UsersPage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  );
}

export default App;