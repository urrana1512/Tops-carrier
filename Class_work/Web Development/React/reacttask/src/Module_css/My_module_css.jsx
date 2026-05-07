
/*
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.


Create the CSS module with the .module.css extension, example: my-style.module.css.
import : import A from './mycss1.module.css';

*/



import React from 'react'

// normal external css import
//import './style.css';


import A from './mycss1.module.css';
import B from './mycss2.module.css';

function My_module_css() {
  return (
    <div>
      
        <div className={A.bigblue}>
            <h5>Box from Module 1</h5>
        </div>
        <div className={B.bigblue}>
            <h5>Box from Module 2</h5>
        </div>
        
    </div>
  )
}

export default My_module_css