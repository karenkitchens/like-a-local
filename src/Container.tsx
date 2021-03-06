import { FC, useState, useCallback, memo } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { Dustbin } from './Dustbin'
import { Box } from './Box'
import { ItemTypes } from './ItemTypes'
import Vector1 from './Vector-1-blue.svg'
import Vector2 from './Vector-2-blue.svg'
import Vector3 from './Vector-3-blue.svg'
import Vector4 from './Vector-4-blue.svg'
import Vector5 from './Vector-5-blue.svg'
import Basemap from './Dark_2.jpg'
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
    { accepts: [ItemTypes.Vector4], lastDroppedItem: null },
    { accepts: [ItemTypes.Vector5], lastDroppedItem: null },
  ])

  const [boxes] = useState<BoxState[]>([
    { name: 'Lake Pleasant', src: Vector1, type: ItemTypes.Vector1 },
    { name: 'White Tank Mountain', src: Vector2, type: ItemTypes.Vector2 },
    { name: 'McDowell Mountains', src: Vector3, type: ItemTypes.Vector3 },
    { name: 'South Mountain', src: Vector4, type: ItemTypes.Vector4 },
    { name: 'Phoenix Mountains', src: Vector5, type: ItemTypes.Vector5 },
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
      <div className="map-container">
        <img src={Basemap} className="map" />
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
        <div style={{ overflow: 'hidden', clear: 'both', position: 'absolute', top: 0, left: 0, width: 300 }}>
          {boxes.map(({ name, type, src }, index) => (
            <Box
              name={name}
              type={type}
              src={src}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
          <a href="/like-a-local" className="replay">Replay!</a>
        </div>
      </div>
    </div>
  )
})
