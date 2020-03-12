import { withClassModifier, withClassDefault } from "@axa-fr/react-toolkit-core"
import compose from "./compose"

export default className =>
  compose(
    withClassDefault(className),
    withClassModifier
  )
