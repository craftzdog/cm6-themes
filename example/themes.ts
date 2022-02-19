import { basicLight } from '../packages/basic-light'
import { basicDark } from '../packages/basic-dark'
import { solarizedDark } from '../packages/solarized-dark'
import { solarizedLight } from '../packages/solarized-light'
import { materialDark } from '../packages/material-dark'

const themes = [
  {
    extension: basicLight,
    name: 'Basic Light'
  },
  {
    extension: basicDark,
    name: 'Basic Dark'
  },
  {
    extension: solarizedLight,
    name: 'Solarized Light'
  },
  {
    extension: solarizedDark,
    name: 'Solarized Dark'
  },
  {
    extension: materialDark,
    name: 'Material Dark'
  }
]

export default themes
