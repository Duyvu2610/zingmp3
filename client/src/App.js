import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mainlayout from "./layouts/Mainlayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Mainlayout>
              <HomePage />
            </Mainlayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
