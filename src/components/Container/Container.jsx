import React from 'react';
import Header from './Header';
import Categories from './Categories';
import SelectItems from './SelectItems';
import View from "./View";

const Container = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Categories />
        <SelectItems />
        <View />
      </div>
    </div>
  );
};

export default Container;
