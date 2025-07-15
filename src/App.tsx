import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";
import { NavbarStyleProvider } from "@/components/NavbarStyleContext";
import PortfolioOne from "./pages/PortfolioOne";
import PortfolioTwo from "./pages/PortfolioTwo";
import PortfolioThree from "./pages/PortfolioThree";
import BlogPostOne from "./pages/BlogPostOne";
import BlogPostTwo from "./pages/BlogPostTwo";
import BlogPostThree from "./pages/BlogPostThree";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <NavbarStyleProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio-one" element={<PortfolioOne />} />
            <Route path="/portfolio-two" element={<PortfolioTwo />} />
            <Route path="/portfolio-three" element={<PortfolioThree />} />
            <Route path="/blog-post-one" element={<BlogPostOne />} />
            <Route path="/blog-post-two" element={<BlogPostTwo />} />
            <Route path="/blog-post-three" element={<BlogPostThree />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </NavbarStyleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
