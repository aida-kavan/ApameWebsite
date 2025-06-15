import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
