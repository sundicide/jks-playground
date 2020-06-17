# React.useRef() 관련
부모와 자식(MaterialDialog) 관계가 아래와 같이 되어있다고 하자.
MaterialTable 컴포넌트를 refresh 하기 위해선 ref가 필요한 상황이다.

```javascript
const tableRef = React.useRef();

function refreshTable() {
  tableRef && tableRef.current.onQueryChange()
}
...
<Child />
<MaterialTable ref={tableRef}>
```

그런데 MaterialDialog에서 Async 작업을 한뒤 리턴 후 refreshTable시도를 하면 동작하지 않는 문제가 발생했다.
디버깅을 해보니 Async 작업 후에는 tableRef가 `{}` 로 변경됨을 확인할 수 있었다.

이를 해결하기 위해 `React.useRef({})` 와 같이 초기 값을 넣어주어서 해결은 했다.
왜 이런일이 일어날까
