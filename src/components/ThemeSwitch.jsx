import React from 'react'

function ThemeSwitch({ theme, setTheme }) {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='sideBtn' id='themeBut' onClick={() => changeTheme()}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </div>
  )
}

export default ThemeSwitch
