
import { writeFile } from "node:fs/promises";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
const SITE_URL = "https://boisroyal.net";

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Les variables Supabase sont absentes.");
}

const endpoint = new URL(`${SUPABASE_URL}/rest/v1/br_products`);

endpoint.search = new URLSearchParams({
  select: "slug,created_at",
  is_active: "eq.true",
  order: "created_at.desc"
}).toString();

const response = await fetch(endpoint, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    Accept: "application/json"
  }
});

if (!response.ok) {
  throw new Error(
    `Erreur Supabase (${response.status}) : ${await response.text()}`
  );
}

const products = await response.json();

const xmlEscape = (value) =>
  String(value).replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const today = new Date().toISOString().slice(0, 10);

const urls = [
  {
    loc: `${SITE_URL}/`,
    lastmod: today,
    priority: "1.0"
  },
  {
    loc: `${SITE_URL}/bois-de-chauffage.html`,
    lastmod: today,
    priority: "0.9"
  },
  {
    loc: `${SITE_URL}/charbon-de-bois.html`,
    lastmod: today,
    priority: "0.9"
  }
];

for (const product of products) {
  if (!product.slug) continue;

  const slug = encodeURIComponent(product.slug);
  const lastmod = product.created_at
    ? new Date(product.created_at).toISOString().slice(0, 10)
    : today;

  urls.push({
    loc: `${SITE_URL}/produit.html?slug=${slug}`,
    lastmod,
    priority: "0.8"
  });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

await writeFile(
  new URL("../sitemap.xml", import.meta.url),
  sitemap,
  "utf8"
);

console.log(
  `Sitemap généré : ${urls.length} URL(s), dont ${products.length} produit(s) actif(s).`
);
