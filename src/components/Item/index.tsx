import { useState } from "react"
import checkedIcon from '../../assets/checkbox.svg'
import squareIcon from '../../assets/uncheckedbox.svg'
import fruit from '../../assets/fruit.svg'
import { Tag } from "../Tag"

interface ItemProps {
  name: string
  amount: number
  unity: string
  categorie: 'padaria' | 'fruta' | 'legume' | 'bebida' | 'carne'

}

export function Item({ name, amount, categorie, unity }: ItemProps) {
  const [completed, setIsCompleted] = useState(false)
  const [opacity, setOpacity] = useState(100)

  function handleToggleChangeItem() {
    if (completed) {
      setIsCompleted(false)
      setOpacity(100)
    } else {
      setIsCompleted(true)
      setOpacity(80)
    }
  }

  return (
    <li onClick={handleToggleChangeItem} className={`hover:cursor-pointer  opacity-${opacity} rounded-xl  p-4 bg-gray-400 flex items-center justify-between`}>
      <span className="flex gap-4">
        <img src={completed ? checkedIcon : squareIcon} alt="" />
        <p className=" flex-col text-gray-200">
          {
            completed ? <h2 className="line-through ">{name}</h2>
              : <h2>{name}</h2>
          }
          {`${amount} ${unity}`}
        </p>
      </span>
      <Tag
        categorieName={categorie}
        imgUlr={fruit}
      />
    </li>
  )
}