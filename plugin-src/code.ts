figma.showUI(__html__, { themeColors: true, height: 300, width: 600 });

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
    const nodes: VectorNode[] = [];

    for (const node of figma.currentPage.selection) {
      const parsse = node as VectorNode;

      const ar = [1, 1, 1, 1, 1, 1, 1].map((v) => v * Math.random())

      parsse.vectorNetwork = {
        vertices: parsse.vectorNetwork.vertices.map((v) => {
          const idx = Math.max(0, Math.floor(ar.length * Math.random()))


          return {
            ...v,
            x: v.x - (ar[idx] * msg.power),
            y: v.y + (ar[idx] * msg.power)
          }
        }),
        segments: parsse.vectorNetwork.segments,
        regions: parsse.vectorNetwork.regions,
      }

      nodes.push(parsse)
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};

