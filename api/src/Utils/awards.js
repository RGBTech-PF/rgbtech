
const Products = [
  {
    name: "Support supports cell phone",
    points: 200,
    description: "Extensible y flexible, lo mejor solo para vos",
    specifications: [{
      "length": "26cm-36cm",
      width: "11.5cm"
    }
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_854384-MLA45113663302_032021-O.webp",
    stock: 0,
  },
  {
    name: "led ring light",
    points: 650,
    description: "No pierda la oportunidad el mejor aro de luz solo para vos",
    specifications: [{
      "connector": "USB",
      LEDQuantity: "120",
      itIsRechargeable: "No"
    }
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_654445-MLA43815950610_102020-O.webp",
    stock: 200,
  },
  {
    name: "Headphones in-ear wireless F9-5",
    points: 800,
    description: "l formato perfecto para vos. Al ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.",
    specifications: [{
      wireless: "Yes",
      NoiseCancellation: "Yes",
      microphone: "Yes",
      batteryLife: "5 hs",
      waterproof: "Yes"
    }
    ],
    img: "https://http2.mlstatic.com/D_NQ_NP_745358-MLA45449928637_042021-O.webp",
    stock: 200,
  },
  {
  name: "beanie with bluetooth",
  points: 1000,
  description: "gift for men, women, boys, girls, teens, teenagers, V5.0 Bluetooth, unique and cool winter hat with headphones and speakers",
  specifications: [{connection: "Bluetooth", 
   batteryLife: "10 hs",
   microphone: "Yes",
   washable:"Yes"}
],
  img: "https://m.media-amazon.com/images/I/8130jrwWWWL._AC_UX522_.jpg",
  stock: 543,
  freeShipping: true
},
  {
  name: "headphone stand",
  points: 500,
  description: "Universal under desk design clamps to desks up to 37mm thick and as narrow as 7mm for a near universal fit on most desks. Spring clip is easy to remove and reattach",
  specifications: [{color: "Black", 
   compatibleDevices: "Headphones",
   material: "Rubber Glass Polycarbonate Wood"}
],
  img: "https://m.media-amazon.com/images/I/616qQCQHs2L._AC_SX425_.jpg",
  stock: 342,
  freeShipping: true
},
  {
  name: "SABRENT Hub USB-C 3.0",
  points: 450,
  description: "Perfect to add an SD card reader and regular USB ports. All ports they're fully functional. The bottom of the hub is magnetic to hold it in place.",
  specifications: [{color: "Gray", 
   USB: "3.0",
   dualSlot: "SD y TF + 3 hubs USB"}
],
  img: "https://images-na.ssl-images-amazon.com/images/I/81GUMFyIxqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  stock: 168,
  freeShipping: true
},
  {
  name: "led strip lights",
  points: 350,
  description: "Premium 5050 LED Lights: Our light strips are made of high quality bright 5050 LED lights. It is not waterproof and is designed for indoor use. It can decorate your bedroom, ceiling, stairs, kitchen cabinet, porch, desk, and living room, especially great for holidays like Christmas, Halloween, parties, etc.",
  specifications: [{color: "Multicolored", 
   LightSourceType: "LED",
   PowerSource: "Corded Electric"}
],
  img: "https://cdn.shopify.com/s/files/1/0599/5262/7880/products/1_7f9002a1-0e33-494d-80b7-55cde90cf9da_700x700.jpg?v=1636148746",
  stock: 93,
  freeShipping: true
}
]

module.exports = {Products}