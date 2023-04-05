import { css } from "@emotion/css";

import TableHeader from "components/TableHeader";
import TableBody from "components/TableBody";

const table = css`
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  border-radius: 10px;
  max-width: 948px;
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  width: 100%;
  overflow-x: auto;
  height: 629px;
`;

function Table({ data }) {
  return (
    <table className={table}>
      {" "}
      <TableHeader data={data} />
      <TableBody data={data} />
    </table>
  );
}

export default Table;
