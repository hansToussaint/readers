import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import Input from "./Input";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();

  function onSubmitSearch(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitSearch)}>
      <Input
        type="text"
        id="doSearch"
        placeholder="Find your books"
        {...register("doSearch")}
      />
      <button>
        <AiOutlineSearch />
      </button>
    </Form>
  );
}

export default SearchBooks;
