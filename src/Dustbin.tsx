import { CSSProperties, FC, memo } from 'react'
import { useDrop } from 'react-dnd'

const style: CSSProperties = {
  borderRadius: '50%',
  height: '100px',
  width: '100px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

export interface DustbinProps {
  accept: string[]
  lastDroppedItem?: any
  onDrop: (item: any) => void
}

export const Dustbin: FC<DustbinProps> = memo(function Dustbin({
  accept,
  lastDroppedItem,
  onDrop,
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  let backgroundColor = ''
  if (isActive) {
    backgroundColor = '#ff000055'
  } else if (canDrop) {
    backgroundColor = '#00000055'
  }

  return (
    <div ref={drop} role="Dustbin" style={{ ...style, backgroundColor }} className={accept.join(', ')}>
      {isActive
        ? 'Release to drop'
        : ``}

      {lastDroppedItem && (
        <div className='dropped'>
        </div>
      )}
    </div>
  )
})
