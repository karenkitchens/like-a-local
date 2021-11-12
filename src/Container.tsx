import { FC, useState, useCallback, memo } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { Dustbin } from './Dustbin'
import { Box } from './Box'
import { ItemTypes } from './ItemTypes'
import Vector1 from './Vector-1.svg'
import Vector2 from './Vector-2.svg'
import Vector3 from './Vector-3.svg'
import Basemap from './NatGeo.jpg'
import update from 'immutability-helper'

interface DustbinState {
  accepts: string[]
  lastDroppedItem: any
}

interface BoxState {
  name: string
  type: string
  src: string
}

export interface DustbinSpec {
  accepts: string[]
  lastDroppedItem: any
}
export interface BoxSpec {
  name: string
  type: string
  src: string
}
export interface ContainerState {
  droppedBoxNames: string[]
  dustbins: DustbinSpec[]
  boxes: BoxSpec[]
}

export const Container: FC = memo(function Container() {
  const [dustbins, setDustbins] = useState<DustbinState[]>([
    { accepts: [ItemTypes.Vector1], lastDroppedItem: null },
    { accepts: [ItemTypes.Vector2], lastDroppedItem: null },
    {
      accepts: [ItemTypes.Vector3],
      lastDroppedItem: null,
    },
    { accepts: [ItemTypes.Vector1], lastDroppedItem: null },
  ])

  const [boxes] = useState<BoxState[]>([
    { name: 'Vector 1', src: Vector1, type: ItemTypes.Vector1 },
    { name: 'Vector-2', src: Vector2, type: ItemTypes.Vector2 },
    { name: 'Vector-3', src: Vector3, type: ItemTypes.Vector3 },
  ])

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([])

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )

  return (
    <div>
      <div>
        <img src={Basemap} className="photo"/>
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {boxes.map(({ name, type, src }, index) => (
          <Box
            name={name}
            type={type}
            src={src}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
})
