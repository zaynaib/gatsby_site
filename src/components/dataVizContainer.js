import React from "react"
import * as containerStyles from "../styles/datavizContainer.module.css"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}