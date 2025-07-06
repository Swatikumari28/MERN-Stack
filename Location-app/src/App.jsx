import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });

          // Reverse Geocoding
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            if (data && data.address) {
              const { city, town, state, country } = data.address;
              setAddress(`${city || town || "Unknown"}, ${state}, ${country}`);
            }
          } catch {
            setAddress("Unable to fetch address.");
          }
        },
        () => {
          setError("Unable to retrieve your location.");
        }
      );
    }
  }, []);

  return (
    <div className="card">
      <h1>📍 Your Current Location</h1>

      {error && <p className="error">{error}</p>}

      {location.lat && location.lon ? (
        <>
          <p><strong>Latitude:</strong> {location.lat.toFixed(4)}</p>
          <p><strong>Longitude:</strong> {location.lon.toFixed(4)}</p>
          {address && <p><strong>Address:</strong> {address}</p>}
          <a
            className="button"
            href={`https://www.google.com/maps?q=${location.lat},${location.lon}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </>
      ) : (
        !error && <p>Detecting your location...</p>
      )}
    </div>
  );
}

export default App;
