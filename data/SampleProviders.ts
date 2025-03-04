import { ServiceProvider } from "../types/ServiceProvider";

export const sampleProviders: ServiceProvider[] = [
  {
    id: "1",
    name: "John Doe",
    username: "best_painter",
    categories: ["Painter", "Home Services"],
    rating: 4.8,
    reviews: 120,
  },
  {
    id: "2",
    name: "Mike Smith",
    username: "no_1_car_mechanic",
    categories: ["Car Mechanic", "Automotive"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Sarah Johnson",
    username: "electrician",
    categories: ["Electrician", "Home Services"],
    rating: 4.7,
    reviews: 45,
  },
  {
    id: "4",
    name: "Alice Brown",
    username: "car_painter_pro",
    categories: ["Car Painter", "Automotive"],
    rating: 4.6,
    reviews: 67,
  },
  {
    id: "5",
    name: "Bob Wilson",
    username: "master_carpenter",
    categories: ["Carpenter", "Woodworking"],
    rating: 4.5,
    reviews: 32,
  },
];
