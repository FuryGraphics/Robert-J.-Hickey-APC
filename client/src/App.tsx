import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Page Imports
import Home from "./pages/Home";
import AttorneyBio from "./pages/AttorneyBio";
import PracticeAreas from "./pages/PracticeAreas";
import Testimonials from "./pages/Testimonials";
import BlogIndex from "./pages/BlogIndex";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";

import CriminalDefenseParent from "./pages/CriminalDefenseParent";
import DUIDefense from "./pages/DUIDefense";
import Expungements from "./pages/Expungements";
import GenericDefenseSubPage from "./pages/GenericDefenseSubPage";

import LocationPage from "./pages/LocationPage";
import BlogPost from "./pages/BlogPost";

function Router() {
  return (
    <Switch>
      {/* Core Pages */}
      <Route path="/" component={Home} />
      <Route path="/attorney" component={AttorneyBio} />
      <Route path="/practice-areas" component={PracticeAreas} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/contact" component={Contact} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/sitemap" component={Sitemap} />

      {/* Criminal Defense Hub and Specific Pages */}
      <Route path="/criminal-defense" component={CriminalDefenseParent} />
      <Route path="/criminal-defense/dui" component={DUIDefense} />
      <Route path="/criminal-defense/expungements" component={Expungements} />
      
      {/* Dynamic Sub-practice pages */}
      <Route path="/criminal-defense/:slug">
        {(params) => <GenericDefenseSubPage slug={params.slug} />}
      </Route>

      {/* Dynamic Location Pages */}
      <Route path="/fullerton">
        {() => <LocationPage slug="fullerton" />}
      </Route>
      <Route path="/orange-county">
        {() => <LocationPage slug="orange-county" />}
      </Route>
      <Route path="/anaheim">
        {() => <LocationPage slug="anaheim" />}
      </Route>
      <Route path="/santa-ana">
        {() => <LocationPage slug="santa-ana" />}
      </Route>
      <Route path="/irvine">
        {() => <LocationPage slug="irvine" />}
      </Route>
      <Route path="/long-beach">
        {() => <LocationPage slug="long-beach" />}
      </Route>
      <Route path="/riverside">
        {() => <LocationPage slug="riverside" />}
      </Route>
      <Route path="/san-bernardino">
        {() => <LocationPage slug="san-bernardino" />}
      </Route>

      {/* Dynamic Blog Posts */}
      <Route path="/blog/:slug">
        {(params) => <BlogPost slug={params.slug} />}
      </Route>

      {/* Final fallback route */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
