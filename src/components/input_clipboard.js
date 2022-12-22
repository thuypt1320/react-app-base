function InputClipboard () {
  const dataTransfer = new DataTransfer();
  return <Input
    isReadOnly
    _active={{}}
    _focus={{}}
    color={'#34594F'}
    defaultValue={'text to select'}
    style={{
      opacity: 1,
      border: '0',
      cursor: 'text'
    }}
    textAlign={'center'}
    onSelect={event => {
      const text = (event?.currentTarget?.value || '').substring((event.currentTarget?.selectionStart || -1), (event.currentTarget?.selectionEnd || -1));
      dataTransfer?.setData('text', text);
    }}
  />;
}

export default InputClipboard;
