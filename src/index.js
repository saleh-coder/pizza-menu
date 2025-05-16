import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );
}
function Pizza() {
  return <h2>Pizza</h2>;
}

// In React 18, the root rendering is done this way:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode enables extra checks in development.
  // It mounts, unmounts, and mounts components again to detect
  // issues like poorly written effects or outdated code.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
