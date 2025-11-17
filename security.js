// Bloqueo por iframe
if (window !== window.top) {
  document.body.innerHTML = "<h2>Acceso denegado (Anti-Embed)</h2>";
}

// Anti-proxy simple
const badAgents = ["curl", "wget", "python", "axios", "proxy", "bot"];
const ua = navigator.userAgent.toLowerCase();

if (badAgents.some(a => ua.includes(a))) {
  document.body.innerHTML = "<h2>Acceso no autorizado</h2>";
}
