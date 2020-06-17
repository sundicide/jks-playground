import React from 'react';
import MaterialTable from "material-table";
import * as d3 from "d3";

export default {
  title: 'MaterialTable/Selection',
};

export const BasicSelection = () => (
  <MaterialTable
    title="Basic Selection Preview"
    columns={[
      { title: 'Name', field: 'name' },
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
      selection: true // 이 옵션을 추가하면 자동으로 맨 왼쪽에 selection column이 추가된다.
    }}
  />
)

export const HandlingSelectionChanges = () => {
  return (
    <MaterialTable
      title="Handling Selection Changes Preview"
      columns={[
        { title: 'Name', field: 'name' },
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
        selection: true
      }}
      onSelectionChange={(rows) => alert('You selected ' + rows.length + ' rows')}
    />
  )
}

export const SingleSelection = () => {
  const [selectedDom, setSelectedDom] = React.useState(null);
  const [selectedTarget, setSelectedTarget] = React.useState(null);

  function onRowClick(event, data) {
    selectedDom && selectedDom.style("background-color", null);

    const td = d3.select(event.target);
    const tr = d3.select(td.node().parentNode);
    tr.style("background-color", "rgb(253,224,234)")
    setSelectedDom(tr);
    setSelectedTarget(data);
  }

  return (
    <>
      <div style={{border: "1px solid black", margin: "5px", padding: "5px"}}>
        <p>{selectedTarget && selectedTarget.name || "null"}</p>
      </div>
      <MaterialTable
        title="Handling Selection Changes Preview"
        columns={[
          { title: 'Name', field: 'name' },
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
        onRowClick={onRowClick}
      />
    </>
  )
}
