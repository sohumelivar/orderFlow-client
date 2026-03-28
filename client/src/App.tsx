import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveOrdersPage } from "./pages/ActiveOrders/ActiveOrders";
import { CompletedOrders } from "./pages/CompletedOrderd/CompletedOrders";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<ActiveOrdersPage/>} />
          <Route path="/completed" element={<CompletedOrders/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
