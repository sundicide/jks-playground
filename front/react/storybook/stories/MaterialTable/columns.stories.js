import React from 'react';
import MaterialTable from "material-table";

export default {
  title: 'MaterialTable/Columns',
};

export const DefaultSort = () => (
  <MaterialTable
    title="Simple Action Preview"
    columns={[
      // 이와같이 기본 sort를 지정할 수 있다.
      // 하지만 render Prop을 사용할 경우엔 customSort 옵션을 지정해줘야 한다.
      { title: 'Name', field: 'name', defaultSort: 'desc' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ]}
    data={[
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]}
    options={{
      selection: true,
      paging: false
    }}
  />
)

export const CustomSort = () => (
  <MaterialTable
    title="Simple Action Preview"
    columns={[
      {
        title: 'Name',
        field: 'name'
      },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
      {
        title: 'Test',
        render: rowData => rowData.test.a,
        // 아래와 같이 object 내부에 있을 경우
        // desc일 경우엔 next와 prev 순서를 변경하면 된다.
        customSort: (prev, next) => (prev.test.a - next.test.a),
        defaultSort: 'asc'
      }
    ]}
    data={[
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 , test: {a: 3}},
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, test: {a: 1} },
      { name: 'Third', surname: 'Tom', birthYear: 2009, birthCity: 34, test: {a: 2} },
    ]}
    options={{
      selection: true,
      paging: false
    }}
  />
)