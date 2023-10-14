import styled from "styled-components";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;

  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-200);
`;

function UserAvatar() {
  const fullName = "Hans";
  const src = "/Hans.JPG";

  return (
    <StyledUserAvatar>
      <Avatar src={src} alt={`Avatar of ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
