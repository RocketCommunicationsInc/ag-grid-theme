report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../snapshots/dark/dark_home_0_document_0_PC.png",
        "test": "../../bitmaps_test/dark/20220406-161324/dark_home_0_document_0_PC.png",
        "selector": "document",
        "fileName": "dark_home_0_document_0_PC.png",
        "label": "home",
        "requireSameDimensions": false,
        "misMatchThreshold": 1e-10,
        "url": "http://localhost:3000/",
        "expect": 0,
        "viewportLabel": "PC",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "dark"
});