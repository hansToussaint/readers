import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  width: 45%;
  height: 10%;
  margin: 15rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    /* height: 90%; */
    border: none;
    padding-top: 0.5rem;
    background-color: transparent;

    &:hover svg {
      color: var(--color-brand-600);
    }
    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  & svg {
    width: 3.7rem;
    height: 3.7rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

function SearchBooks() {
  const [search, setSearch] = useState("");
  const query = search.toLowerCase().replaceAll(" ", "+");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;

    navigate({
      pathname: "/search",
      search: `?query=${query}`,
    });

    setSearch("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        autoComplete="off"
        type="text"
        id="doSearch"
        placeholder="Find your books"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <AiOutlineSearch />
      </button>
    </Form>
  );
}

export default SearchBooks;
