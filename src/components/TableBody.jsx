import { css } from "@emotion/css";

const tbody = css`
  flex-direction: column;
`;

const trWrapper = css`
  border-bottom: 1px solid rgb(239, 242, 245);
  padding: 20px 30px;

  :last-child {
    border-bottom: none;
  }

  :hover {
    background-color: #f8fafc;
  }

  > tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: auto;
    width: 100%;
  }
`;

const tdCSS = css`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;

  :nth-child(3) {
    width: 320px;
  }

  :last-child {
    > a:link {
      width: 30px;
      color: rgb(79 70 229);
      text-decoration: none;
    }
  }
`;

function TableBody({ data }) {
  return (
    <tbody className={tbody}>
      {data.map((item, i) => {
        return (
          <div className={trWrapper}>
            <tr key={i}>
              <td className={tdCSS}>{item.name}</td>
              <td className={tdCSS}>{item.title}</td>
              <td className={tdCSS}>{item.email}</td>
              <td className={tdCSS}>{item.rol}</td>
              <td className={tdCSS}>
                <a href="#">edit</a>
              </td>
            </tr>
          </div>
        );
      })}
    </tbody>
  );
}

export default TableBody;
