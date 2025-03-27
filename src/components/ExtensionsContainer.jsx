import { useState, useEffect } from 'preact/hooks'
import HeroButton from './HeroButton'
import ExtensionsList from './ExtensionsList'
import json from '../assets/data.json'

function ExtensionsContainer () {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('All')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      const storedData = JSON.parse(localStorage.getItem('data')) || json
      setData(storedData)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  function applyFilter (value) {
    setFilter(value)
  }
  const input = document.getElementById('search')
  input.addEventListener('input', (e) => {
    setFilter(e.target.value)
  })
  return (
    <section class='flex flex-col items-center gap-10 justify-center md:max-w-6xl m-auto'>
      <div class='flex md:justify-between md:w-full md:items-center flex-col md:flex-row gap-10 md:gap-0'>
        <h2 class='text-4xl font-bold dark:text-white text-primary'>Extensions List</h2>
        <div class='flex gap-4'>
          {['All', 'Active', 'Inactive'].map((val, idx) => (
            <HeroButton filterVal={filter} key={idx} value={val} onFilter={applyFilter}>{val}</HeroButton>
          ))}
        </div>
      </div>
      <ExtensionsList data={data} setData={setData} filter={filter} />
    </section>
  )
}

export default ExtensionsContainer
