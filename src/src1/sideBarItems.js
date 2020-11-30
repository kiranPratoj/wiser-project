import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";


export default {
    "data" : [    
      {
          "name": "Home",
          "url": "/",
          "Icon": HomeIcon
      },
      {
        "name": "Functions",
        "Icon":ReceiptIcon, 
        "children": [
          {
            "name": "Lighting Widgets",
            "url": "/Functions/Function1"
          },
          {
            "name": "Scenes",
            "url": "/signin"
          },
          {
            "name": "Climate Widgets",
            "url": "/child33"
          },
          {
            "name": "Security Widgets",
            "url": "/child33"
          },
          {
            "name": "Entertainment",
            "url": "/child33"
          },
          {
            "name": "Surveillance",
            "url": "/child33"
          },
          {
            "name": "Power Metering",
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
            "name": "Backyard",
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
            "children": [
              {
                "name": "Profiles",
                "url": "/settings"
              },
              {
                "name": "Edit Scenes",
                "url": "/settings/scenes"
              },
              {
                "name": "Schedules",
                "url": "/settings/scenes"
              },{
                "name": "Setup",
                "url": "/settings/setup"
              },{
                "name": "System",
                "url": "/settings/system"
              }
                ]           
          }
        ]
      }
    