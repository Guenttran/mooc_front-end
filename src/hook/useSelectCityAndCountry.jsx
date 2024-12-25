import {useEffect, useState} from "react";

function useSelectCityAndCountry() {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    useEffect(() => {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "API_KEY");

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
        fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },[])
    return {city, country, cities, countries, setCity, setCountries};
}
export default useSelectCityAndCountry;