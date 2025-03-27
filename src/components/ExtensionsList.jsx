import Cards from './Cards'

function ExtensionsList ({ data, setData, filter }) {
  return (
    <section class='flex w-full flex-col items-start gap-5 m-auto'>
      <article id='cards_container' class='flex flex-col lg:grid m-auto grid-cols-3 grid-rows-4 gap-4 md:w-full md:h-screen'>
        <Cards setData={setData} data={data} filter={filter} />
      </article>
    </section>
  )
}

export default ExtensionsList
