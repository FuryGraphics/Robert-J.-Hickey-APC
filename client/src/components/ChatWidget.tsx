import { useEffect } from "react";
import { useLocation } from "wouter";

const WIDGET_ID = "6a2c13859cb8f1e1298d04db";
const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

// Selectors for the elements the LeadConnector loader injects into the page.
const WIDGET_SELECTOR =
  'chat-widget, [class*="chat-widget"], [id*="chat-widget"]';

function setWidgetVisible(visible: boolean) {
  document
    .querySelectorAll<HTMLElement>(WIDGET_SELECTOR)
    .forEach((el) => {
      el.style.display = visible ? "" : "none";
    });
}

/**
 * Loads the LeadConnector chat widget site-wide, but keeps it hidden on the
 * Contact page (where the inline form is the primary CTA instead).
 */
export default function ChatWidget() {
  const [location] = useLocation();
  const hidden = location === "/contact";

  useEffect(() => {
    if (hidden) {
      setWidgetVisible(false);
      return;
    }

    // Inject the loader once; it persists across SPA navigation.
    if (!document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) {
      const script = document.createElement("script");
      script.src = LOADER_SRC;
      script.async = true;
      script.setAttribute("data-resources-url", RESOURCES_URL);
      script.setAttribute("data-widget-id", WIDGET_ID);
      document.body.appendChild(script);
    }

    setWidgetVisible(true);
  }, [hidden]);

  return null;
}
