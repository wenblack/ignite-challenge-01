interface TagProps {
  imgUlr: string
  categorieName: string
}
export function Tag({ imgUlr, categorieName }: TagProps) {
  return (
    <span className="flex  py-2 px-4 rounded-full bg-orange-black text-orange items-center gap-[6px]">
      <img src={imgUlr} alt={`${imgUlr} Image`} />
      {categorieName}
    </span>
  )
}