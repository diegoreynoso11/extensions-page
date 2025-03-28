import { useMemo, useState } from 'preact/hooks'
import RenderLogo from './RenderLogo.jsx'

function Cards ({ data, setData, filter }) {
  const [modalOpen, setModal] = useState(false)
  const [idx, setIdx] = useState('')
  function handleRemove () {
    const updatedData = data.filter((el) => el.id !== idx)
    setData(updatedData)
    setIdx('')
    setModal(false)
  }
  function handleModal (idx) {
    setModal(true)
    setIdx(idx)
  }
  function handleChange (idx) {
    const updatedData = data.map((el) =>
      el.id === idx ? { ...el, isActive: !el.isActive } : el
    )
    setData(updatedData)
  }
  const filteredData = useMemo(() => {
    if (filter === 'All') return data
    if (filter === 'Active') return data.filter((el) => el.isActive)
    if (filter === 'Inactive') return data.filter((el) => !el.isActive)
    return data.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [data, filter])
  return (
    <>

      {modalOpen && (
        <div onClick={() => setModal(false)} class='fixed inset-0 h-screen m-auto flex justify-center items-center dark:bg-primary/50 z-50 bg-black/30 animate-fade-in'>
          <div onClick={(e) => e.stopPropagation()} class='bg-white ring ring-primary/30 dark:ring-white/30 dark:bg-primary gap-10 dark:text-white rounded-lg p-10 flex flex-col justify-center items-center'>
            <legend class='text-2xl font-bold'>Remove?</legend>
            <div class='flex gap-10'>
              <button onClick={() => handleRemove()} class='ring hover:ring-red-600/40 hover:ring-2 rounded-full py-3 px-5 hover:scale-110 active:scale-100 active:bg-red-700/20 dark:active:bg-red-500/20 hover:bg-black/5 dark:hover:bg-white/10 transition-all'>
                Yes
              </button>
              <button
                class='ring rounded-full py-3 px-5 hover:scale-110 active:scale-100 active:bg-black/20 dark:active:bg-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-all'
                onClick={() => setModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {data.length > 0
        ? (
            filteredData.map((el, idx) => (
              <div
                key={idx}
                class='gap-6 h-full w-full justify-between flex flex-col p-4 border border-gray-300/30 rounded-xl bg-white text-primary dark:bg-gray-800 dark:text-white/70'
              >
                <div class='flex gap-3 justify-between items-center'>
                  <RenderLogo logo={el.logo} />
                  <div class='flex flex-col'>
                    <h1 class='font-bold'>{el.name}</h1>
                    <p class='w-fit md:w-md lg:w-full'>{el.description}</p>
                  </div>
                </div>
                <div class='flex justify-between w-full items-center'>
                  <button
                    onClick={() => handleModal(el.id)}
                    className='dark:bg-primary bg-white ring dark:text-white/50 text-primary focus:ring-select focus:ring-2 ring-offset-1 ring-offset-primary focus:bg-select dark:active:bg-secondary active:bg-zinc-600/30 active:text-primary active:ring-select active:ring-2 px-4 py-2 rounded-full transition-all'
                  >
                    Remove
                  </button>
                  <label class='relative inline-flex items-center cursor-pointer'>
                    <input
                      id={`switch_card-${idx}`}
                      aria-checked={el.isActive}
                      checked={el.isActive}
                      type='checkbox'
                      class='sr-only peer'
                      onChange={() => handleChange(el.id)}
                    />
                    <div class='w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-select rounded-full peer dark:bg-gray-700 peer-checked:bg-select' />
                    <div class='absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full' />
                  </label>
                </div>
              </div>
            ))
          )
        : (
          <p class='dark:text-white text-primary text-center text-4xl font-bold m-auto col-start-2 row-start-1'>
            You don't have extensions
          </p>
          )}
    </>
  )
}

export default Cards
