// Menu data based on the PDF
export const signatureBowls = [
  {
    name: "Pokay Bowl",
    price: 23.69,
    description: "White rice, spicy kani, spicy tuna, shrimp, red onions, cabbage, jalapeno, corn, pickled ginger, cilantro, house sauce, rice puffs.",
    featured: true,
  },
  {
    name: "Volcano Bowl",
    price: 23.69,
    description: "White rice, spicy kani, spicy salmon, spicy shrimp, cabbage, red onions, cucumber, jalapeno, spicy mayo, wasabi peas, rice puffs.",
    featured: true,
  },
  {
    name: "Pineapple Upside Down Bowl",
    price: 22.06,
    description: "White rice, pineapple chicken, pineapple, cabbage, scallions, carrots, sesame seeds.",
    featured: true,
  },
  {
    name: "Coconut Island Bowl",
    price: 22.06,
    description: "White rice, shrimp tempura, pineapple, scallions, corn, carrots, avocado, spicy pineapple mayo, shredded coconut.",
    featured: true,
  },
  {
    name: "Aloha Bowl",
    price: 22.06,
    description: "White rice, chicken katsu, cabbage, cucumber, tomato, carrots, scallions, edamame, wasabi aioli, wonton strips.",
    featured: false,
  },
  {
    name: "Tolu Tuna Bowl",
    price: 23.69,
    description: "White rice, tuna, spicy tuna, house tuna, cucumber, pineapple, avocado, spicy mayo, eel sauce, sesame seeds.",
    featured: false,
  },
  {
    name: "Philly Bowl",
    price: 23.69,
    description: "White rice, double salmon, double cucumber, avocado, cream cheese, spicy mayo.",
    featured: false,
  },
  {
    name: "Cheesesteak Bowl",
    price: 16.95,
    description: "White rice, cheesesteak, peppers and onions, corn, scallions, carrots, avocado, spicy mayo, crunchy onions.",
    featured: false,
  },
  {
    name: "Big Belly Bowl",
    price: 16.95,
    description: "White rice, pork belly, carrots, cabbage, corn, red onions, cilantro, house sauce, crunchy onions.",
    featured: false,
  },
];

export const buildYourOwn = {
  small: { size: "24oz", price: 6.25 },
  large: { size: "32oz", price: 7.50 },
  description: "Choose your base, protein, toppings, and sauces.",
};

export const sideOrders = [
  { name: "Strawberry Dubai Cup", price: 19.95 },
  { name: "Fried Oreos", price: 10.00 },
  { name: "Dubai Chocolate Fried Oreos", price: 19.95 },
  { name: "Crispy Rice (6 pieces)", price: 17.50 },
  { name: "Crispy Rice (8 pieces)", price: 21.00 },
  { name: "Wonton Cups", price: 12.50 },
  { name: "Poke Nachos", price: 18.75 },
  { name: "Poke Fries", price: 17.95 },
];

export const beverages = [
  { name: "Bottled Water", price: 3.00 },
  { name: "Coca-Cola 20oz", price: 3.75 },
  { name: "Diet Coke 20oz", price: 3.75 },
  { name: "Sprite 20oz", price: 3.75 },
  { name: "Pure Leaf Teas", price: 5.00, description: "Lemon, Peach, Raspberry, Sweet, Unsweet" },
  { name: "Smoothies", price: 9.00 },
  { name: "Lemonades", price: 8.00 },
  { name: "Black Teas", price: 8.00 },
  { name: "Fresh Juices", price: 8.00 },
];

export const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best poke bowl I've had in NJ. Always fresh and packed with flavor. The Volcano Bowl is my absolute favorite!",
    date: "2 weeks ago",
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "Finally, a great poke spot in South Jersey! The portions are generous and everything tastes incredibly fresh.",
    date: "1 month ago",
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "Love the build-your-own option. Staff is super friendly and the bowls are made with care. Highly recommend!",
    date: "3 weeks ago",
  },
  {
    name: "David R.",
    rating: 5,
    text: "The Coconut Island Bowl is amazing! Sweet, savory, and perfectly balanced. Will definitely be back.",
    date: "1 week ago",
  },
  {
    name: "Amanda K.",
    rating: 5,
    text: "Great healthy option in Galloway. The poke nachos are a must-try! Clean restaurant with quick service.",
    date: "2 months ago",
  },
  {
    name: "Chris P.",
    rating: 5,
    text: "Excellent quality fish and creative flavor combinations. The Pokay Bowl lives up to its name!",
    date: "3 weeks ago",
  },
];

export const businessInfo = {
  name: "Po-Kay Bowls",
  address: "68 West Jimmie Leeds Road",
  city: "Galloway",
  state: "NJ",
  zip: "08205",
  phone: "(609) 380-2367",
  hours: "Open Daily | 11 AM - 9 PM",
  rating: 4.9,
  reviewCount: 368,
  orderOnlineUrl: "https://www.toasttab.com/po-kay-bowls", // Placeholder
  googleMapsUrl: "https://maps.google.com/?q=68+West+Jimmie+Leeds+Road+Galloway+NJ+08205",
  googleReviewUrl: "https://g.page/r/pokay-bowls/review", // Placeholder
};
