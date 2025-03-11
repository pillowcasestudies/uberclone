import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const city = "New York"; // Change this to your desired city
        const apiKey = "f01314b7ee7fd12770bcc15ac9f70854";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <WeatherContainer>Loading...</WeatherContainer>;
  }

  if (!weatherData) {
    return <WeatherContainer>Error fetching weather data.</WeatherContainer>;
  }

  return (
    <WeatherContainer>
      <CityName>{weatherData.name}</CityName>
      <Temperature>{Math.round(weatherData.main.temp - 273.15)}°C</Temperature>
      <Description>{weatherData.weather[0].description}</Description>
      <Icon
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
    </WeatherContainer>
  );
};

export default Weather;

const WeatherContainer = tw.div`
  flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md
`;

const CityName = tw.div`
  text-lg font-bold
`;

const Temperature = tw.div`
  text-4xl font-semibold
`;

const Description = tw.div`
  text-sm capitalize
`;

const Icon = tw.img`
  w-16 h-16
`;