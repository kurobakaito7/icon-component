import React from 'react';
import './App.css';
import { IconAdd } from './Icon/icons/IconAdd';
import { IconEmail } from './Icon/icons/IconEmail';
import { createFromIconfont } from './Icon/createIconfont';

const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4688885_ot0m96fg7la.js')

function App() {
  return (
    <div style={{padding: "50px"}}>
      <IconAdd size='50px' spin></IconAdd>
      <IconEmail style={{color:'green', fontSize:'50px'}}></IconEmail>

      <IconFont type='icon-icon-test1' size='40px'></IconFont>
      <IconFont type='icon-alipay' size='50px'></IconFont>
    </div>
  );
}

export default App;
