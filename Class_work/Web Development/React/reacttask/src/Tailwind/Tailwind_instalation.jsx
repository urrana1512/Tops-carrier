
/*

https://tailwindcss.com/docs/guides/create-react-app

Tailwind CSS IntelliSense addd in vs code extension

1)Install Tailwind CSS

npm install -D tailwindcss
npx tailwindcss init


2)Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

3)Add the Tailwind directives to your CSS ./src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

*/

import React from 'react'

function Tailwind_instalation() {
    return (
        <div>
            <h1 className="text-3xl text-yellow-500 bg-red-500 text-center">
                Hello world!
            </h1>
        </div>
    )
}

export default Tailwind_instalation