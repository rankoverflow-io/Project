import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

// The full marketing site is served as static HTML from /public.
// The bare "/" route redirects to /index.html so users landing on the
// root hit the real homepage.
function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fcfbf8",
        fontFamily: "system-ui, sans-serif",
        color: "#4b5563",
        fontSize: 14,
      }}
    >
      Loading Rank Overflow…
    </div>
  );
}
