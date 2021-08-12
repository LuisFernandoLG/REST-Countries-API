import styled from "styled-components";

export const ComboBox = ({ filterByRegion }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "false") filterByRegion(value);
  };

  return (
    <ComboBoxStyled>
      <select onChange={handleChange}>
        <option value="false">Filter by Region</option>
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
  flex-basis: min-content;
  padding: 0 0.5rem;
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
    }

    height: 100%;
    width: 100%;
  }
`;
