import React, { useCallback, useState } from 'react';
import Link from 'carbon-react/lib/components/link';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import Log, { LogProvider } from './log';


function debugPrintHistory(his, debugLabel) {
  console.log(`%c${debugLabel} (length = ${his.length}):`, 'font-weight:bold; color:firebrick');
  console.log('%c' + his.map(historyEntry => '  ' + JSON.stringify(historyEntry)).join('\n'), 'color:green');
}


const Chrome = ({ children }) => {
  const [history, setHistory] = useState([]);

  const log = useCallback(({
    target: {
      name, id, value, checked
    }
  }, obj) => {

    const debugTitle = `\nChrome.log() -- ${obj.method.padEnd(8)} -- ${JSON.stringify({ name, id, value, checked })}\n `;
    console.group(debugTitle);

    const newHistory = [...history, {
      ...obj,
      timestamp: Date.now(),
      name,
      id,
      value,
      checked
    }];

    debugPrintHistory(history, 'Current history');
    debugPrintHistory(newHistory, 'New history');

    setHistory(newHistory);

    console.groupEnd(debugTitle);

  }, [history, setHistory]);

  return (
    <AppWrapper>
      <Link to='/'>Back to Index</Link>
      <LogProvider value={ log }>{children}</LogProvider>
      <Log history={ history } />
    </AppWrapper>
  );
};

export default Chrome;
