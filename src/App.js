import './App.css';
import FindingForm from './components/FindingForm/FindingForm';
import { 
  GodBox, 
  WeatherBox, 
  ForecastBox, 
  FormBox, 
  Title, 
  ErrorText,
  XBtn,
  CityName,
  CurrentDate, 
  CurrentTime,
  CurrentBox,
  MainInformation,
  WeatherIcon,
  Temperature,
  ExtraInformation,
  SmallTitle,
  SmallIndex,
  Col,
  Top,
  Middle,
  Bottom
} from './styles';
import useWeather from './hooks/useWeather'
import { useEffect, useState } from 'react';
import { Bars } from 'react-loading-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmarkCircle, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { parseDate, parseHours, parseDateDDMM } from './utils/date';

library.add(faXmarkCircle, faDroplet, faWind)

function App() {
  const { getWeather, isLoading, isError } = useWeather();
  const [weather, setWeather] = useState(null);

  const handleSubmitForm = async (cityName) => {
    const result = await getWeather(cityName);
    if (!isError) {
      //console.log(parseDate(result.current.location.localtime))
      return setWeather(result);
    }
    return;
  }

  useEffect(() => {

  }, [])

  return (
    <GodBox>
      {weather && <WeatherBox>
        <CurrentBox>
          <CityName>{weather.location.name}</CityName>
          <XBtn onClick={() => setWeather(null)}><FontAwesomeIcon icon="xmark-circle" /></XBtn>
          <CurrentDate>{parseDate(weather.location.localtime)}</CurrentDate>
          <CurrentTime>{parseHours(weather.location.localtime)}</CurrentTime>
          <MainInformation>
            <WeatherIcon>
              <img src={weather.current.condition.icon}/>
            </WeatherIcon>
            <Temperature>
              {weather.current.temp_c}°
            </Temperature>
          </MainInformation>
          <ExtraInformation>
            <Col>
              <SmallTitle><FontAwesomeIcon icon="droplet" /></SmallTitle>
              <SmallIndex>{weather.current.humidity}%</SmallIndex>
            </Col>
            <Col>
              <SmallTitle>Feels like</SmallTitle>
              <SmallIndex>{weather.current.feelslike_c}°</SmallIndex>
            </Col>
            <Col>
              <SmallTitle><FontAwesomeIcon icon="wind" /></SmallTitle>
              <SmallIndex>{weather.current.wind_kph}km/h</SmallIndex>
            </Col>
          </ExtraInformation>
        </CurrentBox>
        <ForecastBox>
          {weather.forecast.forecastday.map(item => 
            <Col key={item.date_epoch}>
              <Top>{parseDateDDMM(item.date)}</Top>
              <Middle><img src={item.day.condition.icon}/></Middle>
              <Bottom>{item.day.mintemp_c}° - {item.day.mintemp_c}°</Bottom>
            </Col>
          )}
        </ForecastBox>
      </WeatherBox>}
      {!weather && <FormBox>
        <Title>Weather <strong>Forecast</strong></Title>
        {isLoading ? <Bars /> : <FindingForm handleSubmitForm={handleSubmitForm}/>}
        {isError && <ErrorText>Something went wrong</ErrorText>}
      </FormBox>}
    </GodBox>
  );
}

export default App;
