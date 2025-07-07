import { useEffect, useState } from "react";

export default function GoldPrice() {
  const [pricePerGram, setPricePerGram] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=tether-gold&vs_currencies=usd"
        );
        const data = await res.json();
        const pricePerOunce = data["tether-gold"]?.usd;
        if (pricePerOunce) {
          setPricePerGram((pricePerOunce / 31.1035).toFixed(2));
        }
      } catch (error) {
        console.error("Error fetching gold price:", error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);
  return pricePerGram;
}
