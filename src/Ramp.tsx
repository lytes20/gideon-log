import { useEffect, useState, useRef } from "react";

const url =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/717561";

export default function App() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState<string>("");
  const timeoutRef = useRef<number | null>(null);
  const resultRef = useRef<string | null>(result);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        setResult(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && result && (
        <pre style={{ textAlign: "left" }}>{result}</pre>
      )}
      {!loading && !error && !result && <p>No data.</p>}
    </div>
  );
}
