import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/*eslint-disable react/prop-types */
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "";

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      type="white"
      options={options}
      value={sort}
      onChange={handleChange}
    />
  );
}

export default SortBy;
