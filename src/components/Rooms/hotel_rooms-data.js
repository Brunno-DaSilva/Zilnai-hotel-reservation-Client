const HOTEL_ROOMS = [
  {
    name: "single-economy",
    slug: "single economy",
    roomType: "single",
    price: 100,
    size: 200,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },
  {
    name: "single basic",
    slug: "single-basic",
    roomType: "single",
    price: 150,
    size: 250,
    capacity: 1,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "single standard",
    slug: "single-standard",
    roomType: "single",
    price: 250,
    size: 300,
    capacity: 1,
    pets: true,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "single deluxe",
    slug: "single-deluxe",
    roomType: "single",
    price: 300,
    size: 400,
    capacity: 1,
    pets: true,
    breakfast: true,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "double economy",
    slug: "double-economy",
    roomType: "double",
    price: 200,
    size: 300,
    capacity: 2,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "double basic",
    slug: "double-basic",
    roomType: "double",
    price: 250,
    size: 350,
    capacity: 2,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "double standard",
    slug: "double-standard",
    roomType: "double",
    price: 300,
    size: 400,
    capacity: 2,
    pets: true,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "double deluxe",
    slug: "double-deluxe",
    roomType: "double",
    price: 400,
    size: 500,
    capacity: 2,
    pets: true,
    breakfast: true,
    featured: true,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "family economy",
    slug: "family-economy",
    roomType: "family",
    price: 300,
    size: 500,
    capacity: 3,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "family basic",
    slug: "family-basic",
    roomType: "family",
    price: 350,
    size: 550,
    capacity: 4,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "family standard",
    slug: "family-standard",
    roomType: "family",
    price: 400,
    size: 600,
    capacity: 5,
    pets: true,
    breakfast: false,
    featured: false,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },
  {
    name: "family deluxe",
    slug: "family-deluxe",
    roomType: "family",
    price: 500,
    size: 700,
    capacity: 6,
    pets: true,
    breakfast: true,
    featured: true,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },

  {
    name: "presidential",
    slug: "presidential-room",
    roomType: "presidential",
    price: 600,
    size: 1000,
    capacity: 10,
    pets: true,
    breakfast: true,
    featured: true,
    description:
      "The hotel rooms and suites at the Zilnai offer the perfect blend of beauty and elegance. Our rooms will elevate your stay, whether you're traveling for business, celebrating a honeymoon, or just looking for a remarkable getaway. With views of the Las Vegas valley or the iconic Zilnai fountains right from your suite, your stay will be nothing short of unforgettable.",
  },
];

export default HOTEL_ROOMS;
