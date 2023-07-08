import React from 'react'
import {SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {

  const snap=useSnapshot(state);

  return (
    <h1>Color Picker</h1>
  )
}

export default ColorPicker