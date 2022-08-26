export const download = (script) => {
  return `
<html lang="en" id="download-page">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>${styles}</style>
  <title>Download</title>
</head>
<body>
<table id="download-table"></table>
<script>
    ${script}
</script>
</body>
</html>
`;
};

const styles = `
  #download-table {
  }

  tr {
    width: 100%;
    display: grid;
    border: 1px solid black;
    border-top-color: transparent;
  }

  td {
    border: 1px solid royalblue;
  }
`;
