import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  breakpointDown,
  breakpointUp,
} from "../../styleHelpers/ResponsiveStyle";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { routes } from "./routes";

export const CountryPage = () => {
  let { code } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((response) => {
        return response.ok
          ? response.json()
          : new Promise.reject("Something went wrong");
      })
      .then((json) => {
        setCountry(json);
        console.log(json);
      });
  }, []);

  const itemFromArrayToString = (array) =>
    array.reduce((prev, { name }, i) => {
      if (i === 0) return name;
      if (i < array.length - 1) return `${prev}, ${name}`;
    }, "");

  return (
    <CountryPageStyled>
      <BackBtn>
        <NavLink to={routes.HOME_PAGE}>
          <i class="fas fa-long-arrow-alt-left"></i>
          <span>Back</span>
        </NavLink>
      </BackBtn>

      {country !== null && (
        <CountryInformation>
          <div className="flag">
            <img src={country.flag} alt={country.name} />
          </div>
          <h2>{country.name}</h2>
          <div className="main-details">
            <p>
              Native name: <span>{country.nativeName}</span>
            </p>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
          <div className="extra-details">
            <p>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </p>
            <p>
              Currencies:{" "}
              <span>{itemFromArrayToString(country.currencies)}</span>
            </p>
            <p>
              Languages: <span>{itemFromArrayToString(country.languages)}</span>
            </p>
          </div>
          <ul className="border-countries">
            <h3>Border contries:</h3>
            {country.borders.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </CountryInformation>
      )}
    </CountryPageStyled>
  );
};

const CountryInformation = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  height: auto;
  column-gap: 5rem;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  ${breakpointUp(
    "medium",
    `
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    .border-countries{
      h3{
        flex-basis:100%;
      }
    }

  `
  )}

  .flag {
    grid-column: 1 / 1;
    grid-row: 1 / -1;
    img {
      object-fit: scale-down;
      width: 100%;
      height: 100%;
    }
  }

  .main-details,
  .extra-details {
    p {
      font-weight: 600;
      span {
        font-weight: 300;
      }
    }
  }

  h2 {
    grid-column: 2 / -1;
    grid-row: 1 / span 1;
    font-size: 2rem;
  }

  .main-details {
    /* background: pink; */
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }

  .extra-details {
    /* background: yellow; */
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  }

  .border-countries {
    grid-column: 2 / -1;
    grid-row: 3 / -1;

    /* background: red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding: 0;

    h3 {
      font-size: 1.2rem;
      text-align: left;
    }

    li {
      list-style: none;
      background: ${({ theme: { secondaryColor } }) => secondaryColor};
      padding: 0.5rem;
      text-align: center;
    }
  }
`;

const CountryPageStyled = styled.div`
  background: ${({ theme: { primaryColor } }) => primaryColor};
  padding: 1rem 3rem;
  min-height: 100vh;
  color: white;
`;

const BackBtn = styled(Wrapper)`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  width: max-content;
  padding: 1rem;

  a {
    color: inherit;
    i {
      margin-right: 0.5rem;
    }
  }
`;
