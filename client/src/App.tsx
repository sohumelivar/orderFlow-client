import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ActiveOrdersPage } from "./pages/ActiveOrders/ActiveOrders";
import { CompletedOrders } from "./pages/CompletedOrders/CompletedOrders";
import { Layout } from "./components/Layout/Layout";
import { CreateOrder } from "./pages/CreateOrder/CreateOrder";
import { EditOrder } from "./pages/EditOrder/EditOrder";
import { StatsPage } from "./pages/Stats/Stats";

function App() {
return (
	<BrowserRouter>
		<Routes>
			<Route  element={<Layout />}>
				<Route path="/" element={<ActiveOrdersPage/>} />
				<Route path="/completed" element={<CompletedOrders/>} />
				<Route path="/create" element={<CreateOrder/>} />
				<Route path="/edit" element={<EditOrder/>} />
				<Route path="/stats" element={<StatsPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
};

export default App;
