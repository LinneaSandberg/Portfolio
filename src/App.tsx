import "./assets/scss/App.scss";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <div id="App">

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <ReactQueryDevtools />
    </div>
  )
}

export default App;
