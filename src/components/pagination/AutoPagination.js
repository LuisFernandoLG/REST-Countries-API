import { useEffect, useState } from "react";
import { goTopPage } from "../../helpers/goTopPage";
import { PaginationBar } from "./PaginationBar";

export const AutoPagination = ({ items, itemsPerPage }) => {
  const [numPage, setNumPage] = useState(0);
  const [pagination, setPagination] = useState(null);

  const goNext = () => setNumPage(numPage + 1);
  const goPrev = () => setNumPage(numPage - 1);
  const goTo = (num) => setNumPage(num);

  const getPagination = () => {
    const size = items.length - 1;
    let from = 0;
    let to = 0;
    let pages = [];

    do {
      from = to;
      to = to + itemsPerPage;

      if (to > size) pages.push({ from: from, to: size });
      else pages.push({ from: from, to: to });
    } while (to < size);

    if (pages.length !== 0) setPagination(pages);
  };

  useEffect(() => {
    getPagination();
  }, []);

  useEffect(() => {
    goTopPage();
  }, [numPage]);

  return (
    <>
      {pagination !== null &&
        items.map((item, index) => {
          if (
            index >= pagination[numPage].from &&
            index <= pagination[numPage].to
          )
            return <div key={`${index}-card`}>{item}</div>;
        })}

      {pagination && (
        <PaginationBar
          pagination={pagination}
          goNext={goNext}
          goPrev={goPrev}
          goTo={goTo}
          numPage={numPage}
        />
      )}
    </>
  );
};
