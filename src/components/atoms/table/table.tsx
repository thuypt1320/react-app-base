interface ListProps {
  data?: unknown[];
  onClickRow?: (value: unknown) => void;
}

export const Table = ({
  data = [{ data: '-' }],
  onClickRow
}: ListProps) => {
  const header = Object.keys(data[0]);
  const body = data.map(item => Object.values(item));
  if (!header || !body) return <div>x</div>;
  return (
    <table>
      <thead>
      <tr
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${header.length}, 1fr)`,
          border: '1px solid black'
        }}
      >
        {header.map((item, index) =>
          <th key={index} style={{}}>{item}</th>
        )}
      </tr>
      </thead>
      <tbody
        style={{
          display: 'grid',
          height: '100%',
          gridTemplateRows: `repeat(${body.length}, 1fr)`
        }}
      >
      {body.map((item, index) => (
        <tr
          key={index}
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${header.length}, 1fr)`,
            border: '1px solid black',
            cursor: 'pointer'
          }}
          onClick={() => onClickRow(data[index])}
        >
          {item.map((data, idx) =>
            <td
              key={idx}
              style={{
                paddingLeft: '10px',
                lineHeight: '150%'
              }}
            >
              {data}
            </td>)}
        </tr>))}
      </tbody>
    </table>
  );
};
