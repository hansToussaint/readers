import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useNavigate } from "react-router-dom";
import { useCoverMedium } from "./useCoverBook";
import StarsComponent from "../../ui/StarsComponent";
// import { format, parseISO } from "date-fns";

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
  /* width: 30rem;
  height: 34.5rem; */
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

/*eslint-disable react/prop-types*/
function BookItemLarge({ book }) {
  const navigate = useNavigate();

  const bookId = book.key.replace("/works/", "");

  const coverId = book?.cover_i;
  const coverMedium = useCoverMedium(coverId);

  // const src = book.volumeInfo.imageLinks.thumbnail;
  const title = book.title;
  const average = book.ratings_average;
  const author = book.author_name?.at(0);
  const date = book.first_publish_year;
  const topics = book.subject?.slice(0, 15).join(", ");
  // console.log(topics);

  return (
    <StyledBookItemLarge>
      <Img
        src={coverMedium}
        alt="bookImage"
        onClick={() => navigate(`/book/${bookId}`)}
      />
      <InfoBookDiv>
        <Heading as="h2" onClick={() => navigate(`/book/${bookId}`)}>
          {title}
        </Heading>
        <span>
          {/* by {author} {date && ` | ${format(parseISO(date), "MMM d, Y")}`} */}
          by {author ? author : "Unknown"} {date && `, ${date}`}
        </span>
        {/* <Heading as="h3">{subtitle}</Heading> */}
        {average && <StarsComponent starAverage={average} />}
        <DivAbout>
          {book.subject && (
            <Heading as="h3">
              Book subject: <span>{topics}</span>
            </Heading>
          )}
        </DivAbout>
      </InfoBookDiv>
    </StyledBookItemLarge>
  );
}

export default BookItemLarge;
