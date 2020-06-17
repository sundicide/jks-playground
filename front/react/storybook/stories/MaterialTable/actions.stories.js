import React from 'react';
import MaterialTable from "material-table";
import { Paper } from '@material-ui/core';
import { renderMarkdown } from "../../utils/markdown";
import mdFile from "./actions.md";

export default {
  title: 'MaterialTable/Actions',
};

export const SimpleAction = () => (
  <MaterialTable
    title="Simple Action Preview"
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
    actions={[
      {
        icon: 'save',
        tooltip: 'Save User',
        onClick: (event, rowData) => alert("You saved " + rowData.name)
      }
    ]}
  />
)

export const MultipleAction = () => (
  <MaterialTable
    title="Multiple Actions Preview"
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
    actions={[
      {
        icon: 'save',
        tooltip: 'Save User',
        onClick: (event, rowData) => alert("You saved " + rowData.name)
      },
      {
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
      }
    ]}
  />
)

export const ConditionalActions = () => (
  <MaterialTable
    title="Conditional Actions Preview"
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
    actions={[
      {
        icon: 'save',
        tooltip: 'Save User',
        onClick: (event, rowData) => alert("You saved " + rowData.name)
      },
      rowData => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
        disabled: rowData.birthYear < 2000
      })
    ]}
  />
)

export const PositioningActionsColumnExample = () => (
  <MaterialTable
    title="Positioning Actions Column Preview"
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
    actions={[
      {
        icon: 'save',
        tooltip: 'Save User',
        onClick: (event, rowData) => alert("You saved " + rowData.name)
      },
      rowData => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
        disabled: rowData.birthYear < 2000
      })
    ]}
    options={{
      actionsColumnIndex: -1
    }}
  />
)

export const FreeActionExample = () => (
  <MaterialTable
    title="Free Action Preview"
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
    actions={[
      {
        icon: 'add',
        tooltip: 'Add User',
        isFreeAction: true,
        onClick: (event) => alert("You want to add a new row")
      }
    ]}
  />
)

export const Tips = () => {
  return (
    <div>
      <Paper>
        {renderMarkdown(mdFile)}
      </Paper>
    </div>
  )
}