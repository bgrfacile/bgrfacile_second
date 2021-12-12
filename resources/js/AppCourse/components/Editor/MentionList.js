import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
  } from 'react'


  export const MentionList = forwardRef((props, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = index => {
      const item = props.items[index]

      if (item) {
        props.command({ id: item })
      }
    }

    const upHandler = () => {
      setSelectedIndex(((selectedIndex + props.items.length) - 1) % props.items.length)
    }

    const downHandler = () => {
      setSelectedIndex((selectedIndex + 1) % props.items.length)
    }

    const enterHandler = () => {
      selectItem(selectedIndex)
    }

    useEffect(() => setSelectedIndex(0), [props.items])

    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === 'ArrowUp') {
          upHandler()
          return true
        }

        if (event.key === 'ArrowDown') {
          downHandler()
          return true
        }

        if (event.key === 'Enter') {
          enterHandler()
          return true
        }

        return false
      },
    }))

    return (
      <div className="p-2 relative rounded-sm bg-white text-gray-800 overflow-hidden text-sm">
        {props.items.map((item, index) => (
          <button
            className={`block m-0 w-full text-left bg-transparent rounded-sm px-2 py-1 ${index === selectedIndex ? 'border-black' : ''}`}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item}
          </button>
        ))}
      </div>
    )
  })
