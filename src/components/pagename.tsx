interface SessionProps {
    PageName: string;
}  

export default function PageName({ PageName }: SessionProps) {
  return(
    <div className="m-16 text-lg border-b w-[70rem] border-[#CBD0DD]" >
        <h1 className="pb-2" > {PageName} </h1>
    </div>
  )
}
