function getDegree (val, total) {
  return (val / total) * 360 || 0;
}

function getTurn (val, total) {
  return (val / total) || 0;
}

function getTotal (values) {
  return values.reduce((a, b) => a + b, 0);
}

// unit `degree` (0 - 360)
function background (colors, values) {
  const total = getTotal(values);

  return values
    .map((val, idx) => {
      const prevValue = getTotal(values.slice(0, idx));
      return `${colors[idx]} ${getDegree(prevValue, total)}deg ${getDegree(prevValue, total) + getDegree(val, total)}deg`;
    })
    .join(', ');
}

// with unit `turn` (0 - 1)
function backgroundTurn (colors, values) {
  const total = getTotal(values);

  return values
    .map((val, idx) => {
      const prevValue = getTotal(values.slice(0, idx));
      return `${colors[idx]} ${getTurn(prevValue, total)}turn ${getTurn(prevValue, total) + getTurn(val, total)}turn`;
    })
    .join(', ');
}

function ConicGradient () {
  const values = [50, 50, 50, 50, 50];
  const colors = ['blue', 'red', 'yellow', 'green', 'lightblue', 'lightyellow', 'lightpink', 'lightgreen'];

  return (
    <div>
      <div
        className={'box'}
        style={{ background: `conic-gradient(${backgroundTurn(colors, values)})` }}
      />
      <div className={'cell'}/>
    </div>
  );
}

export default ConicGradient;
