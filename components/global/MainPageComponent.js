import { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import CardItems from "../card_view/CardItems";
import Items from "../table_view/Items";
import PageTitle from "./PageTitle";
import Search from "./Search";

export default function List({ itemsPerPage, data, type }) {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState(true);
  const items = search ? filteredItems : data;

  useEffect(() => {
    setFilteredItems(
      data.filter((item) => {
        const name = item.name ? item.name : item.title;
        if (search && name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else if (!search) return item;
      })
    );
    setCurrentPage(0);
    setItemOffset((0 * itemsPerPage) % items.length);
  }, [search]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [currentPage, filteredItems, itemOffset, itemsPerPage]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setCurrentPage(e.selected);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Container>
        <Row className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <PageTitle type={type} />

          <Search
            search={search}
            setSearch={setSearch}
            cards={cards}
            setCards={setCards}
          />
        </Row>
        <Row className="my-4 justify-content-center">
          {cards ? (
            <CardItems currentItems={currentItems} type={type} />
          ) : (
            <Table striped bordered hover responsive variant="dark">
              <Items currentItems={currentItems} type={type} />
            </Table>
          )}
        </Row>

        <Row>
          <ReactPaginate
            nextLabel=">"
            previousLabel="<"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
          />
        </Row>
      </Container>
    </>
  );
}
