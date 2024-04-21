'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

const SearchCard = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const onSubmit = () => {
    router.push(`/coin/${search}`)
  }
  return (
    <form className="flex flex-col h-[280px] w-[550px] bg-white rounded-lg justify-center items-center gap-6"
      action={onSubmit}>
      <input type="search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#7631FE] block h-[56px] w-[420px] p-2.5"
        placeholder="Currency Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="flex items-center justify-center rounded-lg w-[420px] h-[64px] bg-[#7631FE] text-white"
      >
        Search
      </button>
    </form>
  )
}

export default SearchCard