import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#0B1B33" }}>
        <div style={{ background: "#fff" }} className="w-full max-w-sm rounded-2xl p-7 text-center">
          <div style={{ color: "#0B1B33" }} className="font-display font-bold text-lg mb-2">Something went wrong on this page</div>
          <div style={{ color: "#667085" }} className="text-sm mb-5">Please try reloading — if it keeps happening, a screenshot of the browser console (F12 → Console tab) helps track down exactly what's wrong.</div>
          <button onClick={() => window.location.reload()} style={{ background: "#FFDE00", color: "#0B1B33" }} className="w-full font-semibold py-2.5 rounded-lg">Reload</button>
        </div>
      </div>
    );
  }
}
