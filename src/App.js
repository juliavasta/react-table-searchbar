import "./styles.css";
import { css } from "@emotion/css";

import { useState } from "react";

import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

const users = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    rol: "Member"
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    rol: "Admin"
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    rol: "Member"
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    rol: "Admin"
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    rol: "Owner"
  },
  {
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    rol: "Member"
  }
];

const wrapper = css`
  height: 100%;
  padding: 30px;
  display: flex;
  justify-items: center;
  flex-direction: column;
`;

const titleSearchbarWrapper = css`
  max-width: 948px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 999px) {
    display: flex;
    flex-direction: column;
  }
`;

const tableTextWrapper = css`
  text-align: left;
  margin-left: 30px;
  margin-bottom: 30px;

  > h1 {
    font-weight: 600;
    font-size: 16px;
    margin: 0;
  }
`;

const searchbarWrapper = css`
  margin-bottom: 40px;
`;

export default function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const filteredPosters = users.filter((item) => {
    const text = searchText.toLowerCase();
    return item.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <div className="App">
      <div className={wrapper}>
        <div className={titleSearchbarWrapper}>
          <div className={tableTextWrapper}>
            <h1>Users</h1>
            <p>A list of all the users in your account.</p>
          </div>
          <div className={searchbarWrapper}>
            <SearchBar onChange={handleSearch} />
          </div>
        </div>
        <Table data={filteredPosters} />
      </div>
    </div>
  );
}
