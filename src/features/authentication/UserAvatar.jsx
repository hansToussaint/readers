import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  /* height: 4.5rem;
  width: 4.5rem; */
  border-radius: 50%;

  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-200);
`;

function UserAvatar() {
  const { user } = useUser();
  const currentUserFullName = user?.user_metadata?.fullName;
  const avatar = user?.user_metadata?.avatar;

  const fullName = currentUserFullName ? currentUserFullName : "user";
  const src = avatar ? avatar : "/default-user.jpg";

  return (
    <StyledUserAvatar>
      <Avatar src={src} alt={`Avatar of ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
