import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  //pages=3
  //pageNumbers= [1,2,3]
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => onPageChange(page - 1)} />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => onPageChange(number)} isActive={page === number}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page !== pageNumbers.length && (
          // pageNumbers = [1,2,3] //page = 1, will display pagination next, if page = 3 not display pagination next, how many numbers in pageNumbers array, pagination will display if page and numeber in array not in the end, because in the end numbers in array not display pagination next
          <PaginationItem>
            <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSelector;
