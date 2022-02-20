import { basicLight } from '../packages/basic-light'
import { basicDark } from '../packages/basic-dark'
import { solarizedDark } from '../packages/solarized-dark'
import { solarizedLight } from '../packages/solarized-light'
import { materialDark } from '../packages/material-dark'
import { nord } from '../packages/nord'
import { gruvboxLight } from '../packages/gruvbox-light'
import { gruvboxDark } from '../packages/gruvbox-dark'

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
  },
  {
    extension: nord,
    name: 'Nord'
  },
  {
    extension: gruvboxLight,
    name: 'Gruvbox Light'
  },
  {
    extension: gruvboxDark,
    name: 'Gruvbox Dark'
  }
]

export default themes
