report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../snapshots/light/light_home_0_document_0_PC.png",
        "test": "../../bitmaps_test/light/20220328-145051/light_home_0_document_0_PC.png",
        "selector": "document",
        "fileName": "light_home_0_document_0_PC.png",
        "label": "home",
        "requireSameDimensions": false,
        "misMatchThreshold": 1e-10,
        "url": "http://localhost:3000/light.html",
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
  "id": "light"
});