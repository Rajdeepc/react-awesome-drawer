# Introduction

A React Sliding Drawer Component

## Installation

```
npm i react-awesome-slider --save
```

## How to use

```
import React, { useState, useEffect } from "react";
import {ReactSlider} from "react-awesome-slider";

export default function App() {
  
  const [showSlider, setShowSlider] = useState(false)

  return (
    <div className="App">
      <ReactSlider
      show={showSlider}
      headerTitle="Header"
      dataList=[]
      itemElement={() => {}}
      position="right"
      />
  );
}

```

## Options

ReactSlider supports five options, both of which are mandatory

* show: true | false,
* headerTitle: string,
* dataList: array of objects,
* itemElement: component,
* position: 'right' | 'left'

