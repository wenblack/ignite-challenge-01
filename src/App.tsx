import { AddItemForm } from "./components/AddItemForm"
import { Header } from "./components/Header"
import { Item } from "./components/Item"



function App() {


  return (
    <div className="flex flex-col bg-gray-600 w-screen items-center  min-h-screen">
      <Header></Header>
      <main className="flex flex-col mt-[-42px] ">
        <AddItemForm></AddItemForm>
        <ul>
          <Item
            name="Maçã"
            amount={2}
            unity="unidades"
            categorie="fruta"
          />
        </ul>
      </main>
    </div>
  )
}

export default App
