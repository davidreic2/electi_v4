import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AElecti from "./pages/AElecti";
import ComoTrabalhamos from "./pages/ComoTrabalhamos";
import NotFound from "./pages/NotFound";
import NaPratica from "./pages/NaPratica";
import ParaRedes from "./pages/ParaRedes";
import QuemSomos from "./pages/QuemSomos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* A Electi submenu pages */}
          <Route path="/para-escolas" element={<AElecti />} />
          <Route path="/para-redes" element={<ParaRedes />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/na-pratica" element={<NaPratica />} />
          {/* Como trabalhamos */}
          <Route path="/como-trabalhamos" element={<ComoTrabalhamos />} />
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
