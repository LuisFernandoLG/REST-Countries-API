import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./routes/routes";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  code,
}) => {
  return (
    <NavLink to={`${routes.COUNTRY_PAGE}/${code}`}>
      <CountryCardStyled flex directionColumn>
        <div className="flag">
          <img src={flag} alt={name} />
        </div>
        <div className="details">
          <h3 className="name">{name}</h3>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </CountryCardStyled>
    </NavLink>
  );
};

CountryCard.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.string,
  capital: PropTypes.string,
};

const CountryCardStyled = styled(Wrapper)`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  color: #fff;
  height: 100%;

  .flag {
    flex-basis: 45%;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .details {
    padding: 1rem 2rem;
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};

    .name {
      font-weight: 800;
      text-align: left;
    }

    p {
      font-weight: 600;

      margin: 1rem 0;

      span {
        font-weight: 300;
      }
    }
  }
`;
