import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner"; // ✅ toast notifications
import * as Tooltip from "@radix-ui/react-tooltip"; // ✅ tooltip provider

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Tooltip.Provider>
      {/* ✅ Sonner toaster for notifications */}
      <Toaster richColors position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Tooltip.Provider>
  </QueryClientProvider>
);

export default App;
