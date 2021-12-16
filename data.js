var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.17110827595239897,
        "pitch": 0.10466557156660627,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.8074954947998378,
          "pitch": -0.038787674306654196,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4744057245888289,
          "pitch": -0.04629296804068517,
          "title": "Welcome to FoE!",
          "text": "We hope you enjoy this little tour!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.10213802981928843,
        "pitch": -0.22461385528124467,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.9519595447102098,
          "pitch": -0.04977856347098353,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.1735967204387734,
          "pitch": -0.05551439409534176,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4990782645687304,
          "pitch": -0.13532028759935244,
          "title": "EA3 - The Auditorium",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1639246514203485,
        "pitch": -0.0030960554175809563,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -3.078920601422695,
          "pitch": -0.01150581366188419,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.337110012126276,
          "pitch": -0.1339403596108042,
          "title": "Enjoy a cuppa at Spinelli",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Welcome to the Faculty of Engineering!",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
