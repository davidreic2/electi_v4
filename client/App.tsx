import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/a-electi"
            element={<Placeholder title="A Electi" />}
          />
          <Route
            path="/como-trabalhamos"
            element={<Placeholder title="Como Trabalhamos" />}
          />
          <Route
            path="/na-pratica"
            element={<Placeholder title="Na Prática" />}
          />
          <Route
            path="/eventos"
            element={<Placeholder title="Eventos" />}
          />
          <Route
            path="/para-escolas"
            element={<Placeholder title="Para Escolas" />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
const root = (window as any).__ROOT__ || ((window as any).__ROOT__ = createRoot(container));
root.render(<App />);
