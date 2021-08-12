import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CountryCard } from "../CountryCard";
import { Loader } from "../Loader";
import { SearchBar } from "../SearchBar/SearchBar";

export const HomePage = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);

  const filterByRegion = (region) => {
    setLoading(true);
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((response) => {
        return response.ok
          ? response.json()
          : new Promise.reject("Something went wrong");
      })
      .then((json) => {
        setCountries(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital;alpha2Code"
    )
      .then((response) => {
        return response.ok
          ? response.json()
          : new Promise.reject("Something went wrong");
      })
      .then((json) => {
        setCountries(json);
        console.log(json);
        setLoading(false);
      });
  }, []);

  const searchByInput = (input) => {
    setLoading(true);
    const url =
      input === ""
        ? "https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital;alpha2Code"
        : `https://restcountries.eu/rest/v2/name/${input}`;
    fetch(url)
      .then((response) => {
        return response.ok
          ? response.json()
          : new Promise.reject("Something went wrong");
      })
      .then((json) => {
        setCountries(json);
        console.log(json);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setCountries([]);
      });
  };

  return (
    <HomePageStyled>
      <SearchBar
        filterByRegion={filterByRegion}
        searchByInput={searchByInput}
      />

      {loading ? (
        <Loader />
      ) : (
        <GridWrapper>
          {countries
            ? countries.map(
                (
                  { name, flag, population, region, capital, alpha2Code },
                  index
                ) => (
                  <CountryCard
                    code={alpha2Code}
                    key={index}
                    name={name}
                    flag={flag}
                    population={population}
                    region={region}
                    capital={capital}
                  />
                )
              )
            : null}
        </GridWrapper>
      )}
    </HomePageStyled>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  gap: 4rem;
`;

const HomePageStyled = styled.div`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 0 3rem 3rem 3rem;
  min-height: 100vh;
`;
