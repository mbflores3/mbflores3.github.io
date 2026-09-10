import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnaexRobotics from "./pages/projects/EnaexRobotics";
import SpaeGroup from "./pages/projects/SpaeGroup";
import TarLab from "./pages/projects/TarLab";
import Xautomation from "./pages/projects/Xautomation";
import RobotX from "./pages/projects/RobotX";
import Mariscope from "./pages/projects/Mariscope";
import IpreUSACH from "./pages/projects/IpreUSACH";
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
          <Route path="/projects/xautomation" element={<Xautomation />} />
          <Route path="/projects/robotx" element={<RobotX />} />
          <Route path="/projects/mariscope" element={<Mariscope />} />
          <Route path="/projects/ipreusach" element={<IpreUSACH />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
