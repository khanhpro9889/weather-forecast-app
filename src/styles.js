import Styled from 'styled-components';

export const GodBox = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #A8A7A7;
`

export const FormBox = Styled.div`
    width: 20rem;
    display: flex;
    border-radius: 20px;
    background-color: #363636;
    height: 30rem;
    align-items: center;
    justify-content: center;
    padding: 0px 3rem;
    position: relative;
`

export const WeatherBox = Styled.div`
    width: 20rem;
    display: flex;
    border-radius: 20px;
    background-color: #363636 ;
    height: 30rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

export const ForecastBox = Styled.div`
    width: 100%;
    flex: 1;
    background-color: #474747;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = Styled.div`
    position: absolute;
    top: 25px;
    font-size: 1.7rem;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    strong {
        font-weight: bold;
    }
`

export const ErrorText = Styled.div`
    position: absolute;
    bottom: 30px;
    font-size: 1rem;
    color: #fff;
    font-weight: 300;
`

export const XBtn = Styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 26px;
    cursor: pointer;
    svg {
        color: #fff;
    }
`

export const CurrentBox = Styled.div`
    padding: 20px;
    padding-bottom: 0px;
    position: relative;
    width: 100%;
    flex: 3;
`

export const CityName = Styled.div`

    font-size: 1.9rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
`

export const CurrentDate = Styled.div`
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
    margin-top: 5px;
`

export const CurrentTime = Styled.div`
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
    margin-top: 5px;
`

export const MainInformation = Styled.div`
    height: 170px;
`

export const WeatherIcon = Styled.div`
    text-align: center;
    margin-top: 10px;
    img {
        width: 100px;
    }
`

export const Temperature = Styled.div`
    font-size: 40px;
    text-align: center;
    color: #fff;    
`

export const ExtraInformation = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

export const Col = Styled.div`
    flex: 1;
`

export const SmallTitle = Styled.div`
    text-align: center;
    font-size: 14px;
    color: white;
`

export const SmallIndex = Styled.div`
    margin-top: 5px;
    text-align: center;
    font-size: 10px;
    color: white;
`

export const Top = Styled.div`
    text-align: center;
    color: #fff;
    font-size: 14px;
`  

export const Middle = Styled.div`
    text-align: center;
    color: #fff;
    img {
        width: 50px;
    }
`

export const Bottom = Styled.div`
    text-align: center;
    color: #fff;
    font-size: 12px;
`
