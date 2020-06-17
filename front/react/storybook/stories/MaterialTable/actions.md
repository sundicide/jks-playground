# Selection, Actions
selection과 actions를 같이 쓰게 되면 다음과 같은 문제가 생긴다.
1. actions컬럼이 Toolbar로 올라가버린다.
2. selection을 했을때에만 actions 버튼이 보인다.

이를 해결 하기 위해선 selection을 쓰지 않거나 actions 컬럼을 columns prop에 넣어야 한다.

```javascript
<MaterialTable
  actions={[...]}
  options={{selection: true}}
/>

```

# Actions 컬럼 타이틀 변경
```javascript
<MaterialTable
  localization={{
    header: {
      actions: "Reports"
    }
  }}
/>
```