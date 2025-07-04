import React from 'react'
import Loginusernavbar2 from './Loginusernavbar2';
import Heading from './Heading';

import Searchbar from './Searchbar';
import Loginusersearchbar from './Loginusersearchbar';

export default function Loginuserdashboard() {

  return (

    <div class="container-fluid">
      <Heading title="Welcome to BrokerageFree.com"></Heading>
        <Loginusernavbar2></Loginusernavbar2>
        <Loginusersearchbar></Loginusersearchbar>
    </div>
  )
}
