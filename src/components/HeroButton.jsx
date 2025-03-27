function HeroButton ({ children, onFilter, value, filterVal }) {
  return (
    <button
      onClick={() => onFilter(value)}
      class={` ${filterVal === children ? 'bg-select dark:text-black text-white' : 'dark:bg-primary bg-white dark:text-white text-black'} button_filter  focus:ring-select focus:ring-2 ring-offset-1 ring-offset-white dark:ring-offset-primary focus:bg-select dark:active:bg-secondary active:ring-select active:ring-2 px-4 py-2 rounded-full transition-all`}
    >{children}
    </button>
  )
}

export default HeroButton
