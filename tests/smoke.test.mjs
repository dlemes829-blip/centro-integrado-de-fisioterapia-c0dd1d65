import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const html = fs.readFileSync("public/index.html", "utf-8");
const publicHtml = fs.readFileSync("public/index.html", "utf-8");
const env = fs.readFileSync(".env.example", "utf-8");
const home = fs.readFileSync("src/pages/home.tsx", "utf-8");
const businessData = fs.readFileSync("src/lib/business-data.ts", "utf-8");
const readme = fs.readFileSync("README.txt", "utf-8");

const allText = [html, home, businessData, readme].join("\n");
const mojibake = [
  "\u00c3\u00a1", "\u00c3\u00a0", "\u00c3\u00a2", "\u00c3\u00a3", "\u00c3\u00a7",
  "\u00c3\u00a9", "\u00c3\u00ad", "\u00c3\u00b3", "\u00c3\u00ba", "\u00c3\u00b5",
  "\u00c2\u00b7", "\u00e2\u20ac", "\u00ef\u00bf\u00bd"
];

assert(html.includes("Centro Integrado de Fisioterapia"), "Nome da empresa ausente");
assert(html.includes("Ponta Grossa/PR"), "Localizacao ausente");
assert(html.includes("Av. Monteiro Lobato, 270 - Jardim Carvalho, Ponta Grossa - PR, 84015-480"), "Endereco ausente");
assert(html.includes("(42) 99803-0362"), "Telefone ausente");
assert(html.includes("5.0"), "Nota Google ausente");
assert(html.includes("11"), "Avaliacoes ausentes");
assert(html.includes("https://wa.me/5542998030362"), "WhatsApp URL ausente");
assert(html.includes("FAQ"), "FAQ ausente");
assert(html.includes("Reservar horário"), "CTA principal ausente");
assert(html.includes("data-track=\"floating-whatsapp\""), "Botao flutuante ausente");
assert(html.includes("application/ld+json"), "Schema JSON-LD ausente");
assert(html.includes("maps.google.com/maps"), "Mapa embed ausente");
assert(home.includes("framer-motion"), "Framer Motion ausente");
assert(businessData.includes("researchTools"), "Ferramentas de pesquisa ausentes");
assert(fs.existsSync("rodar-local.bat"), "rodar-local.bat ausente");
assert(fs.existsSync("vite.config.ts"), "vite.config.ts ausente");
assert(fs.existsSync("src/components/ui/button.tsx"), "Componente button ausente");
assert(mojibake.every((token) => !allText.includes(token)), "Texto corrompido por encoding detectado");
assert(env.includes("SUPABASE_URL"), ".env.example precisa de Supabase");

console.log("Landing page Replit-like smoke ok");
