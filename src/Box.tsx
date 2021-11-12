import { CSSProperties, FC, memo } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export interface BoxProps {
  name: string
  type: string
  src: string
  isDropped: boolean
}

export const Box: FC<BoxProps> = memo(function Box({ name, type, src, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )

  return (
    <div ref={drag} role="Box" style={{ ...style, opacity }} className={isDropped ? 'Isdropped' : ''}>
      {isDropped ? <s>{name}</s> : name}
      <img src={src} />
    </div>
  )
})
