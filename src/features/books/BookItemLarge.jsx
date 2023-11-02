import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { formatCurrency } from "../../utils/helpers";

const StyledBookItemLarge = styled.div`
  width: 100%;
  /* width: 100rem; */
  height: 35rem;
  display: flex;

  border-bottom: 4.5px solid var(--color-grey-300);

  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-grey-50);
  }

  & h2 {
    cursor: pointer;

    &:hover {
      color: var(--color-yellow-700);
    }
  }
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  /* margin: auto; */
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-tiny);
  cursor: pointer;

  object-fit: cover;
  object-position: center;
`;

const InfoBookDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: relative;

  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-grey-100);

  & h3 {
    overflow: hidden;
  }
`;

const DivAbout = styled.div`
  /* background: red; */

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  /* margin: 1rem 0; */
  & span {
    font-weight: 100;
    font-size: 1.65rem;
  }
`;

const StyledPrice = styled.div`
  position: absolute;
  bottom: 0;

  & span {
    font-size: 2rem;
    color: var(--color-yellow-700);
  }

  & div {
    /* width: 2rem; */
    display: flex;
    gap: 1rem;
    align-items: center;
    /* background-color: red; */
    margin: 1.5rem 0;

    & p:first-child {
      /* width: 5rem; */
      border-bottom: 1px solid var(--color-grey-600);
      padding-right: 15rem;
    }
  }

  /* background-color: grey; */
`;

/*eslint-disable react/prop-types*/
function BookItemLarge({ book }) {
  const navigate = useNavigate();

  const src = book.volumeInfo.imageLinks.thumbnail;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const author = book.volumeInfo.authors;
  const date = book.volumeInfo.publishedDate;
  const summary = book.searchInfo?.textSnippet
    .replaceAll("&#39;", "'")
    .replaceAll(".", " ")
    .replaceAll("<b>", "")
    .replaceAll("</b>", "");

  const price = book.saleInfo.listPrice?.amount * 0.011;
  // const currency = book.saleInfo.listPrice?.currencyCode;
  // const { viewability } = book.accessInfo;

  return (
    <StyledBookItemLarge>
      <Img
        src={src}
        alt="bookImage"
        onClick={() => navigate(`/book/${book.id}`)}
      />
      <InfoBookDiv>
        <Heading as="h2" onClick={() => navigate(`/book/${book.id}`)}>
          {title}
        </Heading>
        <span>
          by {author} {date && ` | ${format(parseISO(date), "MMM d, Y")}`}
        </span>
        <Heading as="h3">{subtitle}</Heading>
        <DivAbout>
          {book.searchInfo && (
            <Heading as="h3">
              Book Summary: <span>{summary}</span>
            </Heading>
          )}
        </DivAbout>
        <StyledPrice>
          {/* <div>
            <p>Available now</p>
            <p>Viewability: {viewability.replaceAll("_", " ")}</p>
          </div> */}
          <span>{price > 0 ? formatCurrency(price) : "FREE"}</span>
        </StyledPrice>
      </InfoBookDiv>
    </StyledBookItemLarge>
  );
}

export default BookItemLarge;
