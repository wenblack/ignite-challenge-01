import { useState } from "react"
import checkedIcon from '../../assets/checkbox.svg'
import squareIcon from '../../assets/uncheckedbox.svg'
import fruit from '../../assets/fruit.svg'
import bread from '../../assets/bread.svg'
import milk from '../../assets/milk.svg'
import vegetable from '../../assets/vegetable.svg'
import meat from '../../assets/meat.svg'
import { Tag } from "../Tag"

interface ItemProps {
  name: string
  amount: number
  unity: string
  categorie: 'padaria' | 'fruta' | 'legume' | 'bebida' | 'carne'

}

export function Item({ name, amount, categorie, unity }: ItemProps) {
  const [completed, setIsCompleted] = useState(false)

  function handleToggleChangeItem() {
    if (completed) {
      setIsCompleted(false)
    } else {
      setIsCompleted(true)
    }
  }

  if (completed) {
    return (
      <li onClick={handleToggleChangeItem} className="hover:cursor-pointer opacity-80 rounded-xl  p-4 bg-gray-400 flex items-center justify-between">
        <span className="flex gap-4">
          <img src={completed ? checkedIcon : squareIcon} alt="" />
          <p className=" flex-col text-gray-200">
            <h2 className="line-through ">{name}</h2>
            {`${amount} ${unity}`}
          </p>
        </span>
        <Tag
          categorieName={categorie}
          imgUlr={
            categorie === 'fruta' ? fruit : milk}
        />
      </li>
    )
  }
  return (
    <li onClick={handleToggleChangeItem} className="hover:cursor-pointer rounded-xl  p-4 bg-gray-400 flex items-center justify-between">
      <span className="flex gap-4">
        <img src={completed ? checkedIcon : squareIcon} alt="" />
        <p className=" flex-col text-gray-200">
          <h2>{name}</h2>
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