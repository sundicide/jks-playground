import React from 'react';
import MaterialTable from "material-table";

export default {
  title: 'MaterialTable/RemoteData',
};

export const RemoteDataPreview = () => (
  <MaterialTable
    title="Remote Data Preview"
    columns={[
      {
        title: 'Avatar',
        field: 'avatar',
        render: rowData => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src={rowData.avatar}
          />
        ),
      },
      { title: 'Id', field: 'id' },
      { title: 'First Name', field: 'first_name' },
      { title: 'Last Name', field: 'last_name' },
    ]}
    data={query =>
      new Promise((resolve, reject) => {
        let url = 'https://reqres.in/api/users?'
        url += 'per_page=' + query.pageSize
        url += '&page=' + (query.page + 1)
        fetch(url)
          .then(response => response.json())
          .then(result => {
            resolve({
              data: result.data,
              page: result.page - 1, // 이와 같이 페이징 처리도 가능
              totalCount: result.total,
            })
          })
      })
    }
  />
)

export const RefreshData = () => {
  const tableRef = React.createRef(); // React의 Ref를 사용한다.
  
  return (
    <MaterialTable        
      title="Refresh Data Preview"
      tableRef={tableRef}
      columns={[
        {
          title: 'Avatar',
          field: 'avatar',
          render: rowData => (
            <img
              style={{ height: 36, borderRadius: '50%' }}
              src={rowData.avatar}
            />
          ),
        },
        { title: 'Id', field: 'id' },
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://reqres.in/api/users?'
          url += 'per_page=' + query.pageSize
          url += '&page=' + (query.page + 1)
          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.total,
              })
            })
        })
      }
      actions={[
        {
          icon: 'refresh',
          tooltip: 'Refresh Data',
          isFreeAction: true,
          onClick: () => tableRef.current && tableRef.current.onQueryChange(), // 실제로 Refresh 해주는 코드
        }
      ]}
    />
  )
}