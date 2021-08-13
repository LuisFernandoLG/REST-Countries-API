import { useEffect } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { CountryCard } from "../CountryCard";
import { Loader } from "../Loader";
import { MessageError } from "../MessageError";
import { SearchBar } from "../SearchBar/SearchBar";

const getAllURL = "https://restcountries.eu/rest/v2/all";

export const HomePage = () => {
  const { fetchData, fetchErrors, loading, data } = useFetch();

  const filterByRegion = (region) => {
    const url = `https://restcountries.eu/rest/v2/region/${region}`;
    if (region !== "") fetchData(url);
    else fetchData(getAllURL);
  };

  useEffect(() => {
    fetchData(getAllURL);
  }, []);

  const searchByInput = (input) => {
    const url = `https://restcountries.eu/rest/v2/name/${input}`;
    if (input.trim() === "") fetchData(getAllURL);
    else fetchData(url);
  };

  return (
    <HomePageStyled>
      <SearchBar
        filterByRegion={filterByRegion}
        searchByInput={searchByInput}
      />

      {!loading && fetchErrors && (
        <MessageError message={fetchErrors.statusText} />
      )}

      {loading ? (
        <Loader />
      ) : (
        <GridWrapper>
          {data
            ? data.map(
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
