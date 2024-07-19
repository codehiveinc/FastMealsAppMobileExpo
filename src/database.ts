type FoodItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
};

const foodItem = {
  id: 6,
  title: "Pollo a la Parrilla",
  description:
    "Pechuga de pollo a la parrilla con especias y verduras al vapor.",
  price: "$129.00",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCm1E0qLbWYhghE6lbfl9WFGXt-jCYznYq7A&s",
};

const foodItems: FoodItem[] = [
  {
    id: 1,
    title: "Hamburguesa Clásica",
    description:
      "Hamburguesa con carne de res, lechuga, tomate, cebolla y queso cheddar.",
    price: "$99.00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgDGVz7l0HoeL2sXMOU_-b7l5vfxt6xgvmA&s",
  },
  {
    id: 2,
    title: "Pizza Margarita",
    description:
      "Pizza con salsa de tomate, queso mozzarella y albahaca fresca.",
    price: "$149.00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTct5gnfsM4P50jZ6Xd96RHGsq-aR5Taw0jA&s",
  },
  {
    id: 3,
    title: "Tacos de Pastor",
    description: "Tacos de carne al pastor con piña, cebolla y cilantro.",
    price: "$79.00",
    imageUrl:
      "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
  },
  {
    id: 4,
    title: "Ensalada César",
    description:
      "Ensalada de lechuga romana con pollo, queso parmesano y aderezo César.",
    price: "$89.00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05WL051cVLuZ6KCSJPla_Q4mWfWOu7-DiAg&s",
  },
  {
    id: 5,
    title: "Sushi Roll California",
    description: "Roll de sushi con cangrejo, aguacate y pepino.",
    price: "$119.00",
    imageUrl:
      "https://norecipes.com/wp-content/uploads/2019/12/best-california-roll-004.jpg",
  },
  {
    id: 6,
    title: "Pollo a la Parrilla",
    description:
      "Pechuga de pollo a la parrilla con especias y verduras al vapor.",
    price: "$129.00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCm1E0qLbWYhghE6lbfl9WFGXt-jCYznYq7A&s",
  },
  {
    id: 7,
    title: "Pasta Alfredo",
    description: "Pasta fettuccine con salsa Alfredo y pollo.",
    price: "$139.00",
    imageUrl:
      "https://images.aws.nestle.recipes/resized/cc72869fabfc2bdfa036fd1fe0e2bad8_creamy_alfredo_pasta_long_left_1080_850.jpg",
  },
  {
    id: 8,
    title: "Quesadilla de Queso",
    description: "Quesadilla con queso fundido y acompañada de guacamole.",
    price: "$59.00",
    imageUrl:
      "https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Two-Cheese-Quesadillas.jpg",
  },
  {
    id: 9,
    title: "Sopa de Tortilla",
    description: "Sopa de tomate con tiras de tortilla, aguacate y crema.",
    price: "$69.00",
    imageUrl:
      "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/general/sopa-de-tortilla/main-header.jpg",
  },
  {
    id: 10,
    title: "Burrito de Carne Asada",
    description: "Burrito con carne asada, frijoles, arroz y guacamole.",
    price: "$99.00",
    imageUrl:
      "https://www.comedera.com/wp-content/uploads/2023/07/shutterstock_311800970.jpg",
  },
  {
    id: 11,
    title: "Panini de Pollo",
    description: "Panini con pollo, queso suizo, tomate y albahaca.",
    price: "$109.00",
    imageUrl:
      "https://cocinamia.com.mx/wp-content/uploads/2020/02/a-63-1-1100x500.png",
  },
  {
    id: 12,
    title: "Tarta de Frutas",
    description: "Tarta con base de hojaldre y frutas frescas de temporada.",
    price: "$69.00",
    imageUrl:
      "https://cdn.recetasderechupete.com/wp-content/uploads/2019/07/Tarta-de-crema-y-frutas.jpg",
  },
  {
    id: 13,
    title: "Chiles en Nogada",
    description: "Chiles poblanos rellenos de picadillo y bañados en nogada.",
    price: "$159.00",
    imageUrl:
      "https://www.aceitesdeolivadeespana.com/sites/default/files/recetas/chiles_en_nogada.jpeg",
  },
  {
    id: 14,
    title: "Tamales de Elote",
    description: "Tamales dulces de elote con un toque de canela.",
    price: "$49.00",
    imageUrl: "https://cdn7.kiwilimon.com/recetaimagen/14561/6941.jpg",
  },
  {
    id: 15,
    title: "Paella Valenciana",
    description: "Paella con arroz, mariscos, pollo y verduras.",
    price: "$189.00",
    imageUrl: "https://imag.bonviveur.com/paella-valenciana-tradicional.jpg",
  },
  {
    id: 16,
    title: "Baguette de Jamón",
    description: "Baguette con jamón serrano, queso manchego y tomate.",
    price: "$89.00",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/ea24cee9e4a7c20e/680x482cq70/baguette-de-jamon-serrano-foto-principal.jpg",
  },
  {
    id: 17,
    title: "Empanadas Argentinas",
    description: "Empanadas rellenas de carne, cebolla y especias.",
    price: "$79.00",
    imageUrl:
      "https://www.paulinacocina.net/wp-content/uploads/2023/10/como-hacer-empanadas-argentinas-paulina-cocina-recetas.jpg",
  },
  {
    id: 18,
    title: "Falafel con Hummus",
    description: "Bolitas de falafel con hummus y ensalada de pepino.",
    price: "$99.00",
    imageUrl:
      "https://badun.nestle.es/imgserver/v1/80/1290x742/0a602989ffe1-falafel-con-hummus-de-garbanzos-y-crudites-de-verduras.jpg",
  },
  {
    id: 19,
    title: "Ceviche de Camarón",
    description: "Ceviche de camarón con limón, tomate, cebolla y cilantro.",
    price: "$119.00",
    imageUrl: "https://imag.bonviveur.com/ceviche-de-camaron.jpg",
  },
  {
    id: 20,
    title: "Tiramisú",
    description:
      "Postre italiano de capas de mascarpone y bizcocho empapado en café.",
    price: "$79.00",
    imageUrl:
      "https://natashaskitchen.com/wp-content/uploads/2024/04/Tiramisu-Cake-13.jpg",
  },
];

type Restaurant = {
  id: number;
  name: string;
  address: string;
  openingTime: string;
  closingTime: string;
  imageUrl: string;
};

const restaurantItem = {
  id: 4,
  name: "Parrilla Argentina",
  address: "Av. Insurgentes Sur C.P. 03920",
  openingTime: "13:00",
  closingTime: "23:00",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4VFoAoXLaGZqBAQH4zoirTICWP9HPjmuw&s",
};

const restaurantItems: Restaurant[] = [
  {
    id: 1,
    name: "La Casa de las Pizzas",
    address: "Av. Central C.P. 29049",
    openingTime: "10:00",
    closingTime: "18:00",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/89/df/ae/restaurant-la-mansion.jpg?w=600&h=400&s=1",
  },
  {
    id: 2,
    name: "El Rincón del Taco",
    address: "Calle 5 de Mayo C.P. 68000",
    openingTime: "12:00",
    closingTime: "22:00",
    imageUrl:
      "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg",
  },
  {
    id: 3,
    name: "Sushi Express",
    address: "Blvd. Revolución C.P. 27000",
    openingTime: "11:00",
    closingTime: "21:00",
    imageUrl: "https://media.timeout.com/images/106000654/750/422/image.jpg",
  },
  {
    id: 4,
    name: "Parrilla Argentina",
    address: "Av. Insurgentes Sur C.P. 03920",
    openingTime: "13:00",
    closingTime: "23:00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4VFoAoXLaGZqBAQH4zoirTICWP9HPjmuw&s",
  },
  {
    id: 5,
    name: "La Ensaladería",
    address: "Calle Reforma Agraria C.P. 37190",
    openingTime: "09:00",
    closingTime: "17:00",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/dsc01939-1638289406.jpg?crop=0.669xw:1.00xh;0.240xw,0&resize=1200:*",
  },
  {
    id: 6,
    name: "El Buen Sabor",
    address: "Calle del Comercio C.P. 50120",
    openingTime: "08:00",
    closingTime: "20:00",
    imageUrl: "https://media.timeout.com/images/105919383/750/422/image.jpg",
  },
  {
    id: 7,
    name: "Pasta Fresca",
    address: "Av. Universidad C.P. 04360",
    openingTime: "12:00",
    closingTime: "22:00",
    imageUrl:
      "https://media.houseandgarden.co.uk/photos/64bf9f4e54c3ba0222559f4e/16:9/w_2580,c_limit/6268272cd492cf56510d62c7_Laser_Wolf_Brooklyn_Interior_01-min.png",
  },
  {
    id: 8,
    name: "Tostadas y Ceviches",
    address: "Av. del Mar C.P. 82100",
    openingTime: "10:00",
    closingTime: "18:00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAc-BKqVOGpXPo1z2NhZ81CrPPrywzu8F0rA&s",
  },
  {
    id: 9,
    name: "El Asador Mexicano",
    address: "Calle Hidalgo C.P. 44100",
    openingTime: "11:00",
    closingTime: "23:00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZGsgX7rFwjlmx7d7MROxWTqywydtiKXBbA&s",
  },
  {
    id: 10,
    name: "Bistro Francés",
    address: "Av. Las Américas C.P. 76160",
    openingTime: "08:00",
    closingTime: "22:00",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnu9QpTTfvw00ZZvlRP-aTJEeDSQoVUFcM5w&s",
  },
];

export type OrderItem = {
  id: number;
  foodItem: FoodItem;
  quantity: number;
};

export type Order = {
  id: number;
  orderItems: OrderItem[];
  total: string;
};

const order: Order = {
  id: 1,
  orderItems: [
    {
      id: 1,
      foodItem: {
        id: 1,
        title: "Hamburguesa Clásica",
        description:
          "Hamburguesa con carne de res, lechuga, tomate, cebolla y queso cheddar.",
        price: "$99.00",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgDGVz7l0HoeL2sXMOU_-b7l5vfxt6xgvmA&s",
      },
      quantity: 2,
    },
    {
      id: 2,
      foodItem: {
        id: 3,
        title: "Tacos de Pastor",
        description: "Tacos de carne al pastor con piña, cebolla y cilantro.",
        price: "$79.00",
        imageUrl:
          "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
      },
      quantity: 3,
    },
    {
      id: 3,
      foodItem: {
        id: 5,
        title: "Sushi Roll California",
        description: "Roll de sushi con cangrejo, aguacate y pepino.",
        price: "$119.00",
        imageUrl:
          "https://norecipes.com/wp-content/uploads/2019/12/best-california-roll-004.jpg",
      },
      quantity: 1,
    },
  ],
  total: "$535.00",
};

export { foodItems, restaurantItems, restaurantItem, order, foodItem };
