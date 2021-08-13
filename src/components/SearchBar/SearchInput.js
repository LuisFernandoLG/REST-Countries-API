import { useState } from "react";
import styled from "styled-components";
import { breakpointUp } from "../../styleHelpers/ResponsiveStyle";

export const SearchInput = ({ searchByInput }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) =>
    e.key === "Enter" ? searchByInput(input) : null;

  const handleClickOnIcon = () => searchByInput(input);

  return (
    <SearchInputStyled>
      <label htmlFor="search" onClick={handleClickOnIcon}>
        <i className="fas fa-search icon" />
      </label>
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a country..."
        type="search"
        id="search"
      />
    </SearchInputStyled>
  );
};

const SearchInputStyled = styled.div`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  flex-basis: 35%;

  ${breakpointUp("small", "flex-basis:100%;")}

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  .icon {
    padding-right: 1rem;
    cursor: pointer;
  }

  input {
    background: transparent;
    outline: none;
    border: none;
    padding: 0.5rem;
    flex-grow: 1;
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    font-weight: 600;
    font-size: 1.1rem;

    &::placeholder {
      color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
      font-weight: 300;
    }
  }
`;
