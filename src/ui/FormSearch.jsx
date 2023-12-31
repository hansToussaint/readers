import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import Input from "./Input";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = styled.form`
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

  @media screen and (max-width: 450px) {
    margin-right: 1rem;
  }
`;

const Reset = styled.div`
  margin-left: -6rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  cursor: pointer;

  & span {
    border-left: 1px solid var(--color-grey-300);
    height: 4rem;
    margin-right: 1.2rem;
  }
`;

function FormSearch() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("query") ? searchParams.get("query") : ""
  );
  const query = search.toLowerCase().replaceAll(" ", "+");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;

    navigate({
      pathname: "/search",
      search: `?query=${query}`,
    });

    // if (location.pathname === "/search") setSearch(query);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        $specialStyle="search"
        autoComplete="off"
        type="text"
        id="doSearch"
        placeholder="Find your books"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {location.pathname === "/search" && (
        <>
          {search && (
            <Reset>
              <i onClick={() => setSearch("")}>
                <RxCross2 />
              </i>
              <span></span>
            </Reset>
          )}
        </>
      )}

      <button>
        <AiOutlineSearch />
      </button>
    </Form>
  );
}

export default FormSearch;
