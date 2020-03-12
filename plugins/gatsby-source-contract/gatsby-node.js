const fetch = require("node-fetch")
const queryString = require("query-string")

const processContract = (createNodeId, createContentDigest) => contract => {
  const nodeId = createNodeId(`contract-${contract.id}`)
  const nodeContent = JSON.stringify(contract)
  const nodeData = Object.assign({}, contract, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `Contract`,
      content: nodeContent,
      contentDigest: createContentDigest(contract),
    },
  })
  return nodeData
}

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  delete configOptions.plugins
  const apiOptions = queryString.stringify(configOptions)
  const apiUrl = `https://api.mlab.com/api/1/databases/toolkitaxa/collections/contracts/?${apiOptions}`

  return fetch(apiUrl)
    .then(response => response.json())
    .then(contracts => {
      contracts.forEach(contract => {
        const nodeData = processContract(createNodeId, createContentDigest)(
          contract
        )
        createNode(nodeData)
      })
    })
}
