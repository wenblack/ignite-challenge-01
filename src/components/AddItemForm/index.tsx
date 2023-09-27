import PlusIcon from '../../assets/plus.svg'

export function AddItemForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-[80vw]">
      <span className="flex flex-col gap-2">
        <label className="text-gray-200 hover:cursor-pointer text-xs" htmlFor="item">Item</label>
        <input className="h-10 lg:w-[320px] max-w-[80vw] hover:brightness-150 border focus:ring-2 focus:ring-purple-dark border-gray-300 outline-none px-3 text-gray-100 bg-gray-500 rounded-md" placeholder="" type="text" name="item" id="item" />
      </span>
      <div className="flex gap-3">
        <span className="flex flex-col gap-2">
          <label className="text-gray-200 text-xs hover:cursor-pointer " htmlFor="amount">Quantidade</label>
          <div className="hover:brightness-150">
            <input
              min={1}
              placeholder="1"
              className="border-y focus:ring-2 focus:ring-purple-dark border-l border-gray-300 outline-none w-[66px] text-gray-100 h-10 px-3 bg-gray-500 rounded-l-md" type="number" name="amount" id="amount" />
            <select className="focus:ring-2 w-[70px] focus:ring-purple-dark  outline-none text-gray-100 h-10 px-3 border border-gray-300  bg-gray-400 rounded-r-md" name="select">
              <option value="valor1">Un.</option>
              <option value="valor2" selected>L</option>
              <option value="valor3">Kg</option>
            </select>
          </div>
        </span>
        <span className="flex flex-col gap-2">
          <label className="hover:cursor-pointer  text-gray-200 text-xs" htmlFor="category">Categoria</label>
          <div>
            <select className="hover:brightness-150 max-w-[162px] lg:w-[168px] focus:ring-2 focus:ring-purple-dark outline-none text-gray-100 px-3  border border-gray-300 h-10  bg-gray-400 rounded-md" name="category" id="category">
              <option value="valor1">Valor 1</option>
              <option value="valor2" selected>Valor 2</option>
              <option value="valor3">Valor 3</option>
            </select>
          </div>
        </span>
        <span className="flex h-full self-center mt-[25px] items-center justify-center">
          <button className="flex focus:ring-2 focus:ring-[#fff] outline-none h-10 hover:opacity-70 items-center rounded-full p-2 bg-purple">
            <img src={PlusIcon} alt="plus icon image" />
          </button>
        </span>
      </div>
    </form>
  )
}