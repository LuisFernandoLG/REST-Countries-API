import styled from "styled-components";

export const SearchInput = ({ searchByInput }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    searchByInput(value);
  };

  return (
    <SearchInputStyled>
      <label htmlFor="search">
        <i class="fas fa-search icon" />
      </label>
      <input
        onChange={handleChange}
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

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  .icon {
    padding-right: 1rem;
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
