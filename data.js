var APP_DATA = {
  "scenes": [
    {
      "id": "0-new-hot-well",
      "name": "New Hot Well",
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
        "yaw": -0.5227864824008002,
        "pitch": 1.2479348037497342,
        "fov": 1.3755359841548254
      },
      "linkHotspots": [
        {
          "yaw": 2.5192649077652245,
          "pitch": 0.29428952635894134,
          "rotation": 12.566370614359176,
          "target": "3-full-scale-system-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4831732560451805,
          "pitch": 0.8198343541955477,
          "title": "Hot Well",
          "text": "This hot well was built in collaboration with Build-It International, our capacity building and educational partner. Hot water from boiler blowdowns enters through these pipes and flows over a series of steel heat exchangers for WWHR.&nbsp;"
        },
        {
          "yaw": 0.4207627650569332,
          "pitch": 0.8046966608844528,
          "title": "Fresh Water Pipes",
          "text": "These pipes carry cold water into the hot well and WWHR-heated water out! You can follow the pipes through the system and see how thermal energy is reused in the Zambeef boiler.&nbsp;"
        },
        {
          "yaw": -2.1994207708341236,
          "pitch": -0.05440689542307453,
          "title": "Boiler House",
          "text": "This is where Zambeef's coal boiler is housed. Placing the REHEATZ system near the boiler minimises heat loss to the environment.&nbsp;"
        }
      ]
    },
    {
      "id": "1-flowmeter-and-laptop",
      "name": "Flowmeter and Laptop",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3755359841548254
      },
      "linkHotspots": [
        {
          "yaw": 0.27781067741017473,
          "pitch": 0.45226206374896094,
          "rotation": 3.141592653589793,
          "target": "3-full-scale-system-"
        },
        {
          "yaw": 1.0307056382853368,
          "pitch": -0.24460662419551582,
          "rotation": 0,
          "target": "2-pipeworks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.25307439137134224,
          "pitch": -0.3960849934625479,
          "title": "Digital Flowmeter",
          "text": "This flowmeter records the temperature and speed of the pre-treated cold water flowing into the hot well. By tracking these volumes and the temperatures in the hot well, we're able to calculate the heat recovery taking place in the system.&nbsp;"
        },
        {
          "yaw": -1.6452280819681206,
          "pitch": 0.1967587914065465,
          "title": "Data Collection",
          "text": "In addition to the TinyTag sensors, we have a laptop on-site to record flowmeter data. REHEATZ team members visit the site every two weeks to make sure everything is running smoothly and collect data for analysis.&nbsp;"
        }
      ]
    },
    {
      "id": "2-pipeworks",
      "name": "Pipeworks",
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
        "yaw": -0.06778535646795447,
        "pitch": -0.014779506535848697,
        "fov": 1.3755359841548254
      },
      "linkHotspots": [
        {
          "yaw": 0.6297296248422555,
          "pitch": -0.014105864475197905,
          "rotation": 1.5707963267948966,
          "target": "1-flowmeter-and-laptop"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.940766138535025,
          "pitch": 0.1596190938931823,
          "title": "TinyTags",
          "text": "This is one of our many TinyTag sensors on-site. This one measures the temperature of water going to the boiler, after heat recovery has taken place.&nbsp;"
        },
        {
          "yaw": 0.1275131115218393,
          "pitch": -0.4778469359812707,
          "title": "TinyTag",
          "text": "This TinyTag measures the temperature of water going into the storage tank, before heat recovery has taken place.&nbsp;"
        },
        {
          "yaw": -0.9462458999497514,
          "pitch": -0.3136620370551757,
          "title": "Water Treatment Plant",
          "text": "This is where Zambeef treats their groundwater before use on-site. Originally, groundwater was used in the WWHR system and was then sent for treatment; now, the water in the WWHR system has already been softened and is ready for direct use in the boiler.&nbsp;"
        }
      ]
    },
    {
      "id": "3-full-scale-system-",
      "name": "Full-Scale System ",
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
        "yaw": -0.04915316297356043,
        "pitch": 0.07287607863071344,
        "fov": 1.3755359841548254
      },
      "linkHotspots": [
        {
          "yaw": 0.2846486367332268,
          "pitch": 0.2227438329077316,
          "rotation": 0,
          "target": "1-flowmeter-and-laptop"
        },
        {
          "yaw": 0.4885321569721395,
          "pitch": 0.05596881934803122,
          "rotation": 0,
          "target": "2-pipeworks"
        },
        {
          "yaw": -2.9101111362644296,
          "pitch": 0.054083686197710534,
          "rotation": 0,
          "target": "0-new-hot-well"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0197350748057055,
          "pitch": -0.08670710735414566,
          "title": "Solar Panels",
          "text": "These solar panels provide power to the water pump. Adding an isolated (and renewable) source of electricity allows the REHEATZ system to run independently of the Zambeef power supply while further reducing carbon emissions on-site.&nbsp;"
        },
        {
          "yaw": -1.0193058657515799,
          "pitch": 0.24464947595538256,
          "title": "Transfer Pipes",
          "text": "These pipes carry fresh water into and out of the hot well. Before a blowdown, the hot well is filled with ambient-temperature water. Once the water has been heated through WWHR, the pipe on the left brings the heated water out of the hot well and towards the boiler.&nbsp;"
        },
        {
          "yaw": -0.884627796883148,
          "pitch": 0.4299180828411906,
          "title": "Drainage Channel",
          "text": "This is Zambeef's mixed-source drainage channel. Here, the contaminated water from the hot well is discharged into the drain after the thermal energy is removed through WWHR.&nbsp;&nbsp;"
        },
        {
          "yaw": 2.1440844373840733,
          "pitch": -0.09792597183627194,
          "title": "Old Hot Well",
          "text": "This is the site of the pilot REHEATZ system:<div><br></div><div>https://reheatz.github.io/HuntleyFarm3D/</div>"
        },
        {
          "yaw": -0.24848205448027016,
          "pitch": -0.4637232034150358,
          "title": "Welcome!",
          "text": "Welcome to our 3D tour of the full-scale REHEATZ system at Zambeef Huntley Farm. Click and drag to explore the 360 view of the site, or click on the arrows and information icons to visit and learn more about other parts of the system.&nbsp;"
        },
        {
          "yaw": -2.9389127897408507,
          "pitch": -0.33133462254899726,
          "title": "Funding Acknowledgement",
          "text": "Funding for the REHEATZ project has been provided by Research Ireland and Irish Aid under the SDG Challenge Grant 22/FIP/SDG/106.&nbsp;"
        },
        {
          "yaw": -0.2687162770066003,
          "pitch": 0.15997721347005012,
          "title": "Data Collection&nbsp;",
          "text": "This shelter protects some of our electronic equipment -- click on the arrows to learn more!"
        }
      ]
    }
  ],
  "name": "REHEATZ Full-Scale System ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
