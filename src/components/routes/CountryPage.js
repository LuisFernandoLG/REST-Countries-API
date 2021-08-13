import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { breakpointUp } from "../../styleHelpers/ResponsiveStyle";
import { Loader } from "../Loader";
import { MessageError } from "../MessageError";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { routes } from "./routes";

export const CountryPage = () => {
  let { code } = useParams();

  const { loading, data, fetchData, fetchErrors } = useFetch();

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${code}`;
    fetchData(url);
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
          <i className="fas fa-long-arrow-alt-left"></i>
          <span>Back</span>
        </NavLink>
      </BackBtn>

      {!loading && fetchErrors && (
        <MessageError message={fetchErrors.statusText} />
      )}

      {loading && <Loader />}

      {data && (
        <CountryInformation>
          <div className="flag">
            <img src={data.flag} alt={data.name} />
          </div>
          <h2>{data.name}</h2>
          <div className="main-details">
            <p>
              Native name: <span>{data.nativeName}</span>
            </p>
            <p>
              Population: <span>{data.population}</span>
            </p>
            <p>
              Region: <span>{data.region}</span>
            </p>
            <p>
              Sub Region: <span>{data.subregion}</span>
            </p>
            <p>
              Capital: <span>{data.capital}</span>
            </p>
          </div>
          <div className="extra-details">
            <p>
              Top Level Domain: <span>{data.topLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{itemFromArrayToString(data.currencies)}</span>
            </p>
            <p>
              Languages: <span>{itemFromArrayToString(data.languages)}</span>
            </p>
          </div>
          <ul className="border-countries">
            <h3>Border contries:</h3>
            {data.borders.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </CountryInformation>
      )}
    </CountryPageStyled>
  );
};

const CountryInformation = styled.section`
  height: auto;

  margin-top: 3rem;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  column-gap: 3rem;
  font-size: 1.3rem;

  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  ${breakpointUp(
    "medium",
    `
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:2rem;

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
    justify-self: left;
    align-self: center;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .main-details,
  .extra-details {
    p {
      font-weight: 600;

      &:not(:last-child) {
        margin-bottom: 0.6rem;
      }

      span {
        font-weight: 300;
      }
    }
  }

  h2 {
    grid-column: 2 / -1;
    grid-row: 1 / span 1;
    font-size: 2rem;

    align-self: center;
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
      font-weight: 800;
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
  margin: 2rem 0;

  a {
    color: inherit;
    i {
      margin-right: 0.5rem;
    }
  }
`;
