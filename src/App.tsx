import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ChatbotPage from "./pages/ChatbotPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
