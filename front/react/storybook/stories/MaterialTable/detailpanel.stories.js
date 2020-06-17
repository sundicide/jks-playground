import React from 'react';
import MaterialTable from "material-table";

export default {
  title: 'MaterialTable/Detail Panel',
};

const tableColumn = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
  {
    title: 'Birth Place',
    field: 'birthCity',
    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  }
]
const tableData = [
  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
];

export const MultipleDetailPanel = () => (
  <MaterialTable
    title="Multiple Detail Panels Preview"
    columns={tableColumn}
    data={tableData}
    detailPanel={[
      {
        tooltip: 'Show Name',
        render: rowData => {
          return (
            <div
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#43A047',
              }}
            >
              {rowData.name}
            </div>
          )
        },
      },
      {
        icon: 'account_circle',
        tooltip: 'Show Surname',
        render: rowData => {
          return (
            <div
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#E53935',
              }}
            >
              {rowData.surname}
            </div>
          )
        },
      },
      {
        icon: 'favorite_border',
        openIcon: 'favorite',
        tooltip: 'Show Both',
        render: rowData => {
          return (
            <div
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#FDD835',
              }}
            >
              {rowData.name} {rowData.surname}
            </div>
          )
        },
      },
    ]}
  />
)

export const ConditionalHide = () => (
  <MaterialTable
    title="Simple Action Preview"
    columns={tableColumn}
    data={tableData}
    detailPanel={[
      (rowData => ({
        disabled: rowData.name === "Mehmet" ? true : false,
        icon: rowData.name === "Mehmet" ? " " : "chevron_right", // "  "를 넣어줘야 아이콘이 안보인다.
        tooltip: rowData.name === "Mehmet" ? null : "Show Packages",  // tooltip도 null을 보내줘야 에러가 안난다
        render: rowData => <div> Hello World</div>  // render 빼먹지 않도록 주의
      }))
    ]}
  />
)
