import {
  gfc,
  biryanihouse,
  dinapolipizzeria,
  goldendragon,
  indianspice,
  grillmaster,
  lotusblossom,
  ninaskitchen,
  sabrosataqueria,
  saffronpalace,
} from '../../assets/restaurantImages';

const restaurantList = [
  {
    type: 'restaurant',
    data: {
      id: '001',
      name: 'GFC Chicken',
      cuisines: [
        'Southern Style Fried Chicken',
        'Hand-Breaded Chicken Tenders',
        'Crispy Chicken Sandwiches',
        'Spicy Wings and Chicken Buckets',
      ],
      restaurantImage: gfc,
      rating: 4.2,
      deliveryTime: 20,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '002',
      name: 'Grill Master',
      cuisines: [
        'American BBQ (Brisket, Ribs)',
        'Texas Grillhouse Specialties',
        'Smoked Meats and Steaks',
        'Southern Comfort BBQ]',
      ],
      restaurantImage: grillmaster,
      rating: 4.5,
      deliveryTime: 45,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '003',
      name: 'Indian Spice',
      cuisines: [
        'North Indian Curries and Tandoor',
        'Mughlai and Punjabi Cuisine',
        'Traditional Indian Thali Meals',
        'Street Food Snacks (Chat, Samosa)',
      ],
      restaurantImage: indianspice,
      rating: 4.4,
      deliveryTime: 30,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '004',
      name: 'Biryani House',
      cuisines: [
        'South Indian Biryani',
        'Hyderabadi Dum Biryani',
        'Lucknowi (Awadhi) Biryani',
        'Regional Indian Rice Platters',
      ],
      restaurantImage: biryanihouse,
      rating: 4.6,
      deliveryTime: 40,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '005',
      name: 'Golden Dragon',
      cuisines: [
        'Chinese Noodles and Rice',
        'Cantonese Cuisine',
        'Szechuan (Spicy) Chinese',
        'Chinese Dim Sum and Dumplings',
      ],
      restaurantImage: goldendragon,
      rating: 4.2,
      deliveryTime: 25,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '006',
      name: 'Lotus Blossom',
      cuisines: [
        'Authentic Vietnamese Pho',
        'Vietnamese Street Food (Banh Mi, Spring Rolls)',
        'Saigon Cuisine',
        'Hanoi Noodle Dishes',
      ],
      restaurantImage: lotusblossom,
      rating: 4.1,
      deliveryTime: 25,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '007',
      name: 'Saffron Palace',
      cuisines: [
        'Middle Eastern Kebabs and Rice',
        'Persian, Arabic Delicacies',
        'Lebanese Platters (Hummus, Shawarma)',
        'Turkish Sweets and Grills',
      ],
      restaurantImage: saffronpalace,
      rating: 4.5,
      deliveryTime: 35,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '008',
      name: "Nina's Kitchen",
      cuisines: [
        'Caribbean Jerk Chicken and Rice',
        'Island Cuisine (Curry Goat, Plantains)',
        'Jamaican Patties and Stews',
        'Trinidadian Roti and Curries',
      ],
      restaurantImage: ninaskitchen,
      rating: 4.0,
      deliveryTime: 40,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '009',
      name: 'Di Napoli Pizzeria',
      cuisines: [
        'Neapolitan (Hand Tossed) Pizza',
        'New York Style Pizza',
        'Wood-Fired Italian Pizza',
        'Sicilian Deep Dish Pizzas',
      ],
      restaurantImage: dinapolipizzeria,
      rating: 4.3,
      deliveryTime: 35,
    },
  },
  {
    type: 'restaurant',
    data: {
      id: '010',
      name: 'Sabrosa Taqueria',
      cuisines: [
        'Authentic Mexican Tacos and Burritos',
        'Tex-Mex Fusion Dishes',
        'Street Style Quesadillas and Tortas',
        'Baja California Coastal Mexican',
      ],
      restaurantImage: sabrosataqueria,
      rating: 4.2,
      deliveryTime: 20,
    },
  },
];

export default restaurantList;
