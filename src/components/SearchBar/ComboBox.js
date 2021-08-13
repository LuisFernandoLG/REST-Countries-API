import styled from "styled-components";

export const ComboBox = ({ filterByRegion }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    filterByRegion(value);
  };

  return (
    <ComboBoxStyled>
      <select onChange={handleChange}>
        <option value="">Filter by Region</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="americas">Americas</option>
        <option value="oceania">Oceania</option>
      </select>
    </ComboBoxStyled>
  );
};

const ComboBoxStyled = styled.div`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  box-shadow: 0 0 0.625rem ${({ theme: { boxShadowColor } }) => boxShadowColor};

  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem;

  select {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    font-size: 1rem;

    option {
      cursor: pointer;
      background: ${({ theme: { secondaryColor } }) => secondaryColor};
      color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
      padding: 0.5rem;
    }

    height: 100%;
    width: 100%;
  }
`;
