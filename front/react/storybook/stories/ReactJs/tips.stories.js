import React from 'react';
import { Paper } from '@material-ui/core';

import { renderMarkdown } from "../../utils/markdown";
import mdFile from "./question.md";

export default {
  title: 'ReactJs/Tips',
};

export const connectionError = () => {
  const error = `react_devtools_backend.js:6 Warning: Cannot update a component ('ConnectFunction') while rendering a different component ('MainPage'). To locate the bad setState() call inside 'MainPage', follow the stack trace as described in https://fb.me/setstate-in-render
  in MainPage (created by ConnectFunction)
  in ConnectFunction (created by Context.Consumer)
  in Route (created by PrivateRoute)
  in PrivateRoute (created by App)
  in Switch (created by App)
  in div (created by App)
  in Router (created by HashRouter)
  in HashRouter (created by App)
  in App (created by HotExportedApp)
  in AppContainer (created by HotExportedApp)
  in HotExportedApp
  in Provider
r @ react_devtools_backend.js:6
printWarning @ react-dom.development.js?61bb:88
error @ react-dom.development.js?61bb:60
warnAboutRenderPhaseUpdatesInDEV @ react-dom.development.js?61bb:23241
scheduleUpdateOnFiber @ react-dom.development.js?61bb:21165
dispatchAction @ react-dom.development.js?61bb:15660
checkForUpdates @ connectAdvanced.js?fe33:88
handleChangeWrapper @ Subscription.js?79d6:97
eval @ Subscription.js?79d6:23
batchedUpdates$1 @ react-dom.development.js?61bb:21856
notify @ Subscription.js?79d6:19
notifyNestedSubs @ Subscription.js?79d6:92
handleChangeWrapper @ Subscription.js?79d6:97
dispatch @ redux.js?00d8:222
e @ VM68371:1
eval @ redux.js?00d8:477
render @ index.js?98ac:52
finishClassComponent @ react-dom.development.js?61bb:17160
updateClassComponent @ react-dom.development.js?61bb:17110
beginWork @ react-dom.development.js?61bb:18620
beginWork$1 @ react-dom.development.js?61bb:23179
performUnitOfWork @ react-dom.development.js?61bb:22154
workLoopSync @ react-dom.development.js?61bb:22130
performSyncWorkOnRoot @ react-dom.development.js?61bb:21756
eval @ react-dom.development.js?61bb:11089
unstable_runWithPriority @ scheduler.development.js?3069:653
runWithPriority$1 @ react-dom.development.js?61bb:11039
flushSyncCallbackQueueImpl @ react-dom.development.js?61bb:11084
flushSyncCallbackQueue @ react-dom.development.js?61bb:11072
discreteUpdates$1 @ react-dom.development.js?61bb:21893
discreteUpdates @ react-dom.development.js?61bb:806
dispatchDiscreteEvent @ react-dom.development.js?61bb:4168
Show 2 more frames`;
  return (
    <div>
      <Paper>
        {renderMarkdown(mdFile)}
      </Paper>
    </div>
  )
}
