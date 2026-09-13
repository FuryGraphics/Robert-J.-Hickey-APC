import { useEffect, useRef } from "react";

const WIDGET_URL =
  "https://www.localmarketingmanager.com/api/reviews/robert-hickey-law-offices-review-widget";

function getPageSizeForWidth(width: number) {
  if (width < 450) return 1;
  if (width < 675) return 2;
  if (width < 918) return 3;
  if (width < 1144) return 4;
  return 5;
}

// Local Marketing Manager reviews widget; picks how many reviews to show from the container width
export default function ReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const iframe = iframeRef.current;
    if (!container || !iframe) return;

    const setSrc = () => {
      const width = container.offsetWidth;
      if (width === 0) return;
      const expectedSrc = `${WIDGET_URL}?pageSize=${getPageSizeForWidth(width)}`;
      if (iframe.src !== expectedSrc) iframe.src = expectedSrc;
    };

    setSrc();
    const observer = new ResizeObserver(setSrc);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="reviewsWidgetContainer" ref={containerRef}>
      <iframe
        id="reviewsWidget"
        ref={iframeRef}
        title="Reviews Widget"
        style={{ width: "100%", border: "none", minHeight: "300px" }}
      />
    </div>
  );
}
