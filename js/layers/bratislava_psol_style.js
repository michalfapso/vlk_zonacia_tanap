// PSoL Bratislava 2026-2035 — štýly

// --- Štátne lesy (Lesy SR, š.p.): zelená výplň ---
var psolBratislavaStatneLesyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#2D6B22", fillOpacity: 0.35, strokeColor: "#1F4E17", strokeWidth: 1.0
})});

// --- Mestské lesy Bratislava: modrozelená výplň ---
var psolBratislavaMestskeLesyStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#1F7A5C", fillOpacity: 0.35, strokeColor: "#155440", strokeWidth: 1.0
})});

// --- Ostatné subjekty: hnedosivá výplň ---
var psolBratislavaOstatniStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#8B5A2B", fillOpacity: 0.35, strokeColor: "#5A3A1B", strokeWidth: 1.0
})});

// --- Dielce štátnych lesov s plánovanou ťažbou: červenooranžová výplň, zvýraznené ---
var psolBratislavaTazbaStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#E05A00", fillOpacity: 0.55, strokeColor: "#8A2E00", strokeWidth: 1.2
})});

// --- Bezzásahové referenčné plochy do 31.12.2025: modrá výplň, výrazný obrys ---
var psolBratislavaBezzasahoveStyleMap = new OpenLayers.StyleMap({"default": new OpenLayers.Style({
  fillColor: "#1450A0", fillOpacity: 0.45, strokeColor: "#0A2E60", strokeWidth: 1.4
})});
