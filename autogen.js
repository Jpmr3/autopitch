// api/autogen.js
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Use POST" });
  const { kind, topic, lang, priceCents, currency } = req.body || {};

  const paymentLink = `https://paypal.me/youracct/${Math.round(
    (priceCents || 5900) / 100
  )}`;
  const content = {
    proposal: `Pack ${kind} para ${topic} (${lang}). Precio ${
      (priceCents || 5900) / 100
    } ${currency || "EUR"}`,
    files: [{ name: "README.md", url: null }],
  };

  res.json({ ok: true, paymentLink, content });
}
