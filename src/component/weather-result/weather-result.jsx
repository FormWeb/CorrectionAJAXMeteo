import { useState, useEffect } from "react";
import axios from "axios"

const URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=__city__&appid=c3fa448b20d4333b499f552522c429d3&units=metric&lang=fr';

const WeatherResult = (props) => {

    const {city} = props;
    
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        setData(null)
        setError(false)

        axios.get(URL_WEATHER.replace("__city__", city))
            .then(({ data }) => {
                setData(data)
            })
            .catch(err => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [city])

    return (
        <>
            {
                isLoading ? (
                    <p>Chargement</p>
                ) : error ? (
                    <p>Erreur</p>
                ) : !data ? (
                    <p>Pas de donnée</p>
                ) : (
                    <div>
                        <p>La température à {data.name} est de {data.main.temp}</p>
                        <p>La vitesse du vent est de {data.wind.speed}</p>
                    </div>
                    
                )
            }
        </>
        
    )
}

export default WeatherResult