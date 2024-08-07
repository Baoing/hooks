import { useEffect, useState } from "react"

interface CurrencyRates {
  [key: string]: number;
}

interface UseCurrencyConverterResult {
  rates: CurrencyRates;
  convert: (amount: number, from: string, to: string) => number | null;
  loading: boolean;
  error: Error | null;
}

const getCookie = (name: string): { data: CurrencyRates; timestamp: number } | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue ? JSON.parse(cookieValue) : null; // 确保 cookieValue 不为 null
  }
  return null; // 如果没有找到，返回 null
};
const setCookie = (name: string, value: any, days: number) => {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${JSON.stringify(value)}; expires=${expires}; path=/`;
};


const COOKIE_NAME = "HOOK_CURRENCY_RATES";
const CACHE_DURATION = 1000 * 60 * 60; // 1小时

const useCurrencyConverter = (): UseCurrencyConverterResult => {
  const [rates, setRates] = useState<CurrencyRates>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const cachedRates = getCookie(COOKIE_NAME);
        const now = Date.now();

        // 检查缓存是否过期
        if (cachedRates && (now - cachedRates?.timestamp < CACHE_DURATION)) {
          setRates(cachedRates.data);
          setLoading(false);
          return;
        }

        const response = await fetch("https://cdn.shopify.com/s/javascripts/currencies.js?time=" + new Date().getTime())
        const text = await response.text()
        const scriptContent = text.replace(/var Currency=(.*?);/, '$1');

        if (!scriptContent) throw new Error("Failed to parse currency data.")
        const data = eval(`(${scriptContent})`)

        // 存储到 Cookie
        setCookie(COOKIE_NAME, { data: data.rates, timestamp: Date.now() }, 1); // 1天有效期

        setRates(data.rates)
        setLoading(false)
      } catch (err) {
        setError(err as Error)
        setLoading(false)
      }
    }

    fetchRates()
  }, [])

  const convert = (amount: number, from: string, to: string): number | null => {
    if (!rates[from] || !rates[to]) return null
    return amount * rates[from] / rates[to]
  }

  return { rates, convert, loading, error }
}

export default useCurrencyConverter;
