const plugin = require('tailwindcss/plugin')

const hideScrollBar = plugin(function ({ addUtilities }) {
  addUtilities({
    '.hide-scrollbar': {
      /*working on  Firefox */
      'scrollbar-width': 'none',

      /* Chromeeee */
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  })
})

module.exports = hideScrollBar;