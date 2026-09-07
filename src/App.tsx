import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RobotX from "./pages/projects/RobotX";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/enaexrobotics" element={<EnaexRobotics />} />
          <Route path="/projects/spaegroup" element={<SpaeGroup />} />
          <Route path="/projects/tarlab" element={<TarLab />} />
          <Route path="/projects/2xautomation" element={<2xAutomation />} />
          <Route path="/projects/robotx" element={<RobotX />} />
          <Route path="/projects/mariscope" element={<Mariscope />} />
          <Route path="/projects/uc" element={<UC />} />
          <Route path="/projects/usach" element={<USACH />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
