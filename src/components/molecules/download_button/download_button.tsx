import * as React from 'react';
import { Button } from '@chakra-ui/react';
import { download } from 'src/constant/download';

export interface IDownloadButtonProps {
  data: any;
}

const createTable = (data) => {
  return `const table = window.document.getElementById('download-table');
  const data = ${JSON.stringify(data)}
    data.map((item, index) => {
      const row = window.document.createElement('tr');
      row.setAttribute('id', "row-"+index);
      row.setAttribute('style', "grid-template-columns: repeat("+Object.values(item).length+", 1fr)");
      Object.values(item).map(
        (value, idx) => {
          const td = window.document.createElement('td');
          td.setAttribute('id', "data-"+idx);
          td.innerText = value.toString();
          row.append(td);
        }
      );
      table.append(row);
    });`;
};

export const DownloadButton: React.FC<IDownloadButtonProps> = ({ data }) => {
  const handleDownloadAsHTML = () => {
    const a = document.createElement('a');
    const blob = new Blob([download(createTable(data))], { type: 'text/html' });
    // try to show
    // window.open(URL.createObjectURL(blob));
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.setAttribute('download', 'data.html');
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url); // un-active url
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.setAttribute('download', 'data.json');
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url); // un-active url
  };

  const handleShow = () => {
    const blob = new Blob(['-'], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url);
    URL.revokeObjectURL(url); // un-active url
  };

  return (
    <Button onClick={handleShow}>
      Download
    </Button>
  );
};
