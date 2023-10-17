import styled from "styled-components";

const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 20rem;
  box-shadow: var(--shadow-md);
  padding: 0.8rem;
  margin: 1rem 0.5rem;
  background-color: var(--color-grey-50);
  /* background: red; */

  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-tiny);
`;

const Img = styled.img`
  height: 100%;
  width: 90%;
  margin: 4px auto;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-tiny);

  object-fit: cover;
  object-position: center;
`;

/*eslint-disable react/prop-types*/
function BookItem({ book }) {
  console.log(book);

  const src = book.volumeInfo.imageLinks.thumbnail;

  if (!src) return;

  const title = book.volumeInfo.title;

  return (
    <StyledBookItem>
      <Img src={src} alt="bookImage" />
      <h3>{title}</h3>
      <p>rate ⭐⭐⭐⭐</p>
    </StyledBookItem>
  );
}

export default BookItem;
