import { basicLight } from '../packages/basic-light'
import { solarizedDark } from '../packages/solarized-dark'
import { solarizedLight } from '../packages/solarized-light'

const themes = [
  {
    extension: basicLight,
    name: 'Basic Light'
  },
  {
    extension: solarizedLight,
    name: 'Solarized Light'
  },
  {
    extension: solarizedDark,
    name: 'Solarized Dark'
  }
]

export default themes
