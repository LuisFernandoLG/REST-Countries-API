import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const PaginationBar = ({
  pagination,
  goNext,
  goPrev,
  goTo,
  numPage,
}) => {
  const getPaginationRange = () => {
    const numbers = [];
    const limit = 2;
    pagination.forEach((_, i) => {
      if (numPage + limit >= i && i >= numPage - limit) numbers.push(i);
    });

    return numbers;
  };

  return (
    <PaginationBarStyled
      flex
      justifyContent="center"
      alignItems="center"
      gap="0.5rem"
    >
      {numPage !== 0 && <button onClick={goPrev}> {"Prev"} </button>}

      {getPaginationRange().map((i) => (
        <button
          key={i + "ss"}
          onClick={() => goTo(i)}
          className={i === numPage ? "currentPage" : null}
        >
          {i}
        </button>
      ))}

      {numPage + 1 !== pagination.length && (
        <button onClick={goNext}> {"Next"} </button>
      )}
    </PaginationBarStyled>
  );
};

const PaginationBarStyled = styled(Wrapper)`
  grid-column: 1 / -1;
  padding: 10px;

  button {
    background: ${({ theme: { secondaryColor } }) => secondaryColor};
    color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    box-shadow: 0 0 1.25rem ${({ theme: { boxShadowColor } }) => boxShadowColor};

    padding: 1rem;
    border-radius: 0.5rem;
  }

  .currentPage {
    background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    font-weight: 800;
  }
`;
