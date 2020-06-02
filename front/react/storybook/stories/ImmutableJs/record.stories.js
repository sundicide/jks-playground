import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { fromJS, Record, Map, setIn } from "immutable";
import * as immutable from "immutable";

import { renderMarkdown } from "../../utils/markdown";
import recordMarkdown from "./record.md";

export default {
  title: 'ImmutableJs/Records',
};

function renderTyping(func) {
  var regex = /([.\n\s]*return)(.*)(\;[.\n\s]*})/gm;
  const funcBodyString = regex.exec(func.toString())[2];
  console.log('funcBodyString', funcBodyString);
  return (
    <Typography variant="h5">
      {funcBodyString} // {func()}
    </Typography>
  )
}

export const Records = () => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.0/d3.min.js"
    document.getElementsByTagName('head')[0].appendChild(script);
  document.myVars = {
    immutable: "asdasd"
  }
  const data = Record({ a: 1, b: { c: 4 } })();
  const innerMap = Map({ a: Map({b : 3}) });
  document.myVars = {
    immutable: require("immutable")
  }

  data.set('a', 2);
  console.log(data.toJSON()) // 변화 없음
  let newData = data.set('a', 2);
  console.log(newData.toJSON());

  console.log(data.setIn(['b', 'c'], 'c').toJSON());
  return (
    <div>
      <Paper>
        {renderMarkdown(recordMarkdown)}
        <Typography variant="h3">
        {`
        Record({
          a: 1,
          b: {
            c: 4
          }
        })();
        `}
        </Typography>
        {renderTyping(() => data.get('a'))}
        {renderTyping(() => data.getIn(['b', 'c']))}
      </Paper>
      <Typography>
        {/* data.get('a') */}
      </Typography>
      {/* {data.get('a')} */}

      {/* {renderTyping(() => data.getIn(['b', 'c']))} */}
    </div>
  )
}
