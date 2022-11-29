function ContentEditable () {
  return <div
    contentEditable
    id={'text'}
    onInput={(e) => console.log(e.currentTarget.textContent)}
  >text
  </div>;
}

export default ContentEditable;
