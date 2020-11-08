const hiddenLayers = figma.currentPage.findAll(node => node.visible === false)

if (hiddenLayers.length > 0) {
    figma.currentPage.selection = hiddenLayers
    figma.viewport.scrollAndZoomIntoView(hiddenLayers)
    figma.closePlugin("Нidden layers selected");
  } else {
    figma.closePlugin("👌 You don't have hidden layers")
  }

figma.closePlugin()
