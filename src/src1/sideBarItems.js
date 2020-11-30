import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";


export default {
    "data" : [    
      {
          "name": "Home",
          "url": "/home",
          "Icon": HomeIcon
      },
      {
        "name": "Functions",
        "Icon":ReceiptIcon, 
        "children": [
          {
            "name": "Function 1",
            "url": "/Functions/Function1"
          },
          {
            "name": "Function 2",
            "url": "/signin"
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
            "url": "/Locations/Location1"
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
            "url": '/Settings'
          }
        ]
      }
    