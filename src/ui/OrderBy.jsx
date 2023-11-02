import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/*eslint-disable react/prop-types */
function OrderBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = searchParams.get("orderBy") || "";

  function handleChange(e) {
    searchParams.set("orderBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      type="white"
      options={options}
      value={orderBy}
      onChange={handleChange}
    />
  );
}

export default OrderBy;
