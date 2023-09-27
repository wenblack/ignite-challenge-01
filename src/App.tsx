import { AddItemForm } from "./components/AddItemForm"
import { Header } from "./components/Header"



function App() {


  return (
    <div className="flex flex-col bg-gray-600 w-screen items-center  min-h-screen">
      <Header></Header>
      <main className="flex flex-col mt-[-42px] ">
        <AddItemForm></AddItemForm>
      </main>
    </div>
  )
}

export default App
