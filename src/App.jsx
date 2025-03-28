import Register from "./presentation/ui/pages/Register";
import WebSocketPage from "./presentation/ui/pages/WebSocketPage"
import Navbar from "./presentation/ui/templates/Navbar";

function App() {
 
  return (
    <div>
    <Register/>
    <Navbar/>
    <WebSocketPage/>
    </div>
  );
}

export default App;