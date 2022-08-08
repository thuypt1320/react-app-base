interface ListProps {
  data?: unknown[];
}

export const Table = ({ data }: ListProps) => {
  const header = Object.keys(data[0]);
  const body = data.map(item => Object.values(item));
  if (!header || !body) return <div>x</div>;
  return (
    <table style={{ border: '1px solid black' }}>
      <header>
        {header.map((item, index) =>
          <th key={index} style={{
            border: '1px solid black'
          }}>{item}</th>
        )}
      </header>
      <body>
      {body.map((item, index) => (<tr key={index}>
        {item.map((data, idx) =>
          <td
            key={idx}
            style={{ border: '1px solid black' }}>
            {data}
          </td>)}
      </tr>))}
      </body>
    </table>
  );
};
