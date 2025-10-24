// api/metrics.js
export default function handler(req, res) {
  const today = (Math.random() * 400 + 80).toFixed(2);
  const w7 = (Math.random() * 2000 + 800).toFixed(2);
  const w30 = (Math.random() * 8000 + 3200).toFixed(2);
  const orders = Math.floor(Math.random() * 50 + 5);
  const nextPayout = new Date(Date.now() + 3 * 24 * 3600 * 1000).toISOString().slice(0, 10);

  res.json({
    today: `€${today}`,
    w7: `€${w7}`,
    w30: `€${w30}`,
    orders,
    nextPayout,
  });
}
