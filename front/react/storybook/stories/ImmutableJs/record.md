# Record
```javascript
var data = Record({
  a: 1,
  b: {
    c: 2
  }
})()
```

## get
``` react
data.get("a") // 1
data.get("b") // { c: 2}
```

## getIn
`3.8.2` 버전에서는 동작 암함. 현재 `4.0.0-rc.12` 에서 동작
``` js
data.get(["b", "c"]) // 2
```

## Tip
### React store
state가 아래와 같이 되어있다고 하자
```javascript
import { Record } from "immutable";

const FORM_DATA = "targetdb/FORM_DATA";
const INIT_FORM_DATA = "targetdb/INIT_FORM_DATA";

export const formData = createAction(FORM_DATA);
export const initFormData = createAction(INIT_FORM_DATA);
export const selectedTargetInfo = createAction(SELECTED_TARGET_INFO);

const defaultFormData = {
  a: {
    b: false,
    c: ""
  },
  d: {
    e: false
  }
};

const initialState = Record({
  formData: defaultFormData
})();

export default handleActions(
  {
    [FORM_DATA]: (state, action) => state.set("formData", action.payload),
    [INIT_FORM_DATA]: (state, action) =>
      state.set("formData", Record(defaultFormData)())
  },
  initialState
);
```
initFormData 를 수행할 때 `Record(defaultFormData)` 처럼 Record로 감싼 것에 주의!
formData로 넘어 오는 것은 action.payload에 Record가 넘어와서 문제가 없지만
직접 넣을때는 전달한 값으로 set 되므로 일반 배열을 전달 시 객체가 일반 배열로 대치된다.
