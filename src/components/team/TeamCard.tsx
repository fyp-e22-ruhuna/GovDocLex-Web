import tag from "/assets/images/name_tag.webp";

function TeamCard() {
  return (
    <div className='flex flex-col gap-2 p-5 border bg-black rounded-3xl w-[200px] h-[120px]'>
      {/* name */}
      <div className="flex items-center gap-2">
        <img src={tag} alt="tag" className="w-5 h-5" />
        <p className="font-sans text-white">Name</p>
      </div>
      {/* desc */}
      <p className="font-sans text-white opacity-60 text-sm">Description</p>
    </div>
  )
}

export default TeamCard
