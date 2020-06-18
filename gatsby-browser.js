/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/assets/scss/blk-design-system-react.scss";
import "./src/assets/css/Styles.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons' 
import { fas } from '@fortawesome/free-solid-svg-icons' 

library.add(fab,far,fas)