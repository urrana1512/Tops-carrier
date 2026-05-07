import React from 'react';
import ReactDOM from 'react-dom/client';

import Myapp from './Myapp';

const root = ReactDOM.createRoot(document.getElementById('raj'));
root.render(
  <React.StrictMode>
	
	<h1 class="p-3 bg-success">Hi i am from index.js</h1>
	<Myapp/>
  
  </React.StrictMode>
);
