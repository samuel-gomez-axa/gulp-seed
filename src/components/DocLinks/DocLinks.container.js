import React, { useCallback, useState } from "react"
import DocLinks from "./DocLinks"

const initState = { value: "latest" }

const setOptions = releases =>
  releases.map(release => ({ value: release, label: release }))

const DocLinkEnhanced = ({ releases }) => {
  let optionsRaw = setOptions(releases)
  optionsRaw.shift()
  const options = [{ value: "latest", label: "latest" }, ...optionsRaw]

  const [stateSelect, setStateSelect] = useState(initState)
  const onChange = useCallback(({ value }) => {
    setStateSelect({ value })
  }, [])

  return (
    <DocLinks onChange={onChange} stateSelect={stateSelect} options={options} />
  )
}

export default DocLinkEnhanced
