export default {
    "data" : [
      {
          "name": "HOME",
          "url": "/item1"
      },
      {
        "name": "SETTINGS",
        "url": "/item2"
      },
      {
        "name": "FUNCTIONS",
        "children": [
          {
            "name": "FUNCTION 1",
            "url": "/child31"
          },
          {
            "name": "FUNCTION 2",
            "url": "/child32"
          },
          {
            "name": "FUNCTION 3",
            "url": "/child33"
          }
        ]
      },
      {
        "name": "LOCATIONS",
        "children": [
          {
            "name": "MAIN HALL",
            "url": "/child41"
          },
          {
            "name": "DRAWING ROOM",
            "url": "/child42"
          },
          {
            "name": "BEDROOMS",
            "children": [
              {
                "name": "BEDROOM 1",
                "url": "/child431"
              },
              {
                "name": "BEDROOM 2",
                "url": "/child432,"
              },
              {
                "name": "BEDROOM 3",
                "url": "/child433"
              }
            ]
          }
        ]
      }
    ]
  }