import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";


export default {
    "data" : [
      
      {
          "name": "Home",
          "url": "/item1",
          "Icon": HomeIcon
      },{
        "name": "Functions",
        "Icon":ReceiptIcon, 
        "children": [
          {
            "name": "Function 1",
            "url": "/child31"
          },
          {
            "name": "Function 2",
            "url": "/child32"
          },
          {
            "name": "Function 3",
            "url": "/child33"
          },
          {
            "name": "Function 4",
            "url": "/child33"
          },
          {
            "name": "Function 5",
            "url": "/child33"
          },
          {
            "name": "Function 6",
            "url": "/child33"
          }
        ]
      },
      
      {
        "name": "Locations",
        "children": [
          {
            "name": "Main Hall",
            "url": "/child41"
          },
          {
            "name": "Drawing Room",
            "url": "/child42"
          },
          {
            "name": "Lounge",
            "url": "/child42"
          },{
            "name": "Location 4",
            "url": "/child42"
          },{
            "name": "Location 5",
            "url": "/child42"
          },{
            "name": "Location 6",
            "url": "/child42"
          },
                    
            ]
          },
          {
            "name": "Settings",
            "url": "/item2"
          }
        ]
      }
    