import React, { useContext } from 'react'

import { UserData } from './Use_context'

function D() {

  const { name, setName } =useContext(UserData);

  return (
    <div>
       <button onClick={() => setName("Pinal Nagar")}>Change Main</button>
       <h1>Hi i am D Component : {name}</h1>
    </div>
  )
}

export default D