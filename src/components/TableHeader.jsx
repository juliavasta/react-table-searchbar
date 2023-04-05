import { css } from "@emotion/css";

const trWrapper = css`
  border-bottom: 1px solid rgb(239, 242, 245);
  padding: 30px 30px 20px 30px;

  :last-child {
    border-bottom: none;
  }

  > tr {
    width: 100%;
  }
`;

const thCSS = css`
  :nth-child(3) {
    width: 320px;
  }

  :last-child {
    width: 100px;
  }
`;

function TableHeader() {
  return (
    <thead>
      <div className={trWrapper}>
        <tr>
          <th className={thCSS}>Name</th>
          <th className={thCSS}>Title</th>
          <th className={thCSS}>Email</th>
          <th className={thCSS}>Rol</th>
        </tr>
      </div>
    </thead>
  );
}

export default TableHeader;
