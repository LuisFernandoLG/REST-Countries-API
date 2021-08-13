import { Wrapper } from "../shareStyleComponents/Wrapper";
import { ComboBox } from "./ComboBox";
import { SearchInput } from "./SearchInput";

export const SearchBar = ({ filterByRegion, searchByInput }) => {
  return (
    <Wrapper flex justifyContent="space-between" pd="2rem 0" wrap="true">
      <SearchInput searchByInput={searchByInput} />
      <ComboBox filterByRegion={filterByRegion} />
    </Wrapper>
  );
};
