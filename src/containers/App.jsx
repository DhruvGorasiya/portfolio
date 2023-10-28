import React from "react";
import {About, Header,Home, ServiceCount, Skills} from "./"

const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32px px-4 lg:px-12 pr-4 lg:pr-32">
      
      <Header/>
      <Home/>
      <ServiceCount/>
      <About/>
      <Skills/>

    </div>
  );
};

export default App;
