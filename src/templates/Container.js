import React from "react"
import { PREFIX } from "../components/constants"
import withClassModifier from "../utils/withClassModifier"

const Container = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const EnhancedContainer = withClassModifier(`${PREFIX}-container`)(Container)
EnhancedContainer.displayName = "Container"

export default EnhancedContainer
