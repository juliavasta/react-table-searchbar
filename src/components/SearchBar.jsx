import { css } from "@emotion/css";
import { SearchOutlined } from "@ant-design/icons";

const visuallyHidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const searchbarWrapper = css`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  display: flex;
  align-items: center;
`;

const searchbar = css`
  background-color: #fff;
  border: 0;
  outline: 0;
  font-size: 14px;
  width: 100%;

  ::placeholder {
    color: #b0b1b5;
    letter-spacing: 0.1px;
  }
`;

function SearchBar({ onChange }) {
  return (
    <form className={searchbarWrapper}>
      <label>
        <span className={visuallyHidden}>Find all the users...</span>
      </label>
      <SearchOutlined
        style={{
          marginRight: "8px",
          color: "#b0b1b5",
          fontSize: "17px",
          fontWeight: "bold"
        }}
      />
      <input
        type="search"
        name="name"
        placeholder="Find all the users..."
        className={searchbar}
        onChange={onChange}
      />
    </form>
  );
}

export default SearchBar;
