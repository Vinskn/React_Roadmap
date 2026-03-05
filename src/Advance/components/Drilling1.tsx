import React from 'react'
import Drilling2 from './Drilling2'
import { drillingType } from '../types'

/** 
 * komponen ini tidak memerlukan props color, tapi tetap menerima props color
 * karena props color akan dikirim ke Drilling2
 * sehingga komponen ini melakukan props drilling
*/
const Drilling1 = ({color}: drillingType) => {
  return (
    <div className='border border-black p-3 rounded-lg'>
        <h3>Props drilling container</h3>
        <Drilling2 color={color} />
    </div>
  )
}

export default Drilling1