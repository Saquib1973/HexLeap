import img1 from "../public/1.jpeg";
import img2 from "../public/2.jpeg";
import img3 from "../public/7.jpeg";
import img5 from "../public/5.jpeg";
import img6 from "../public/6.jpeg";
import img7 from "../public/4.jpeg";
import { StaticImageData } from "next/image";
interface Ticket {
  image: StaticImageData;
  name: string;
  location: string;
  date: string;
  day: string;
  time: string;
}

export const ticket: Ticket[] = [
  {
    image: img5,
    name: "Las Vegas Aviators",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    date: "15 OCT",
    day: "Sun",
    time: "4:30",
  },

  {
    image: img5,
    name: "Las Vegas Aviators",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    date: "15 OCT",
    day: "Sun",
    time: "4:30",
  },
  {
    image: img7,
    name: "Las Vegas Aviators",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    date: "15 OCT",
    day: "Sun",
    time: "4:30",
  },
  {
    image: img5,
    name: "Las Vegas Aviators",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    date: "15 OCT",
    day: "Sun",
    time: "4:30",
  },
  {
    image: img6,
    name: "Las Vegas Aviators",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    date: "15 OCT",
    day: "Sun",
    time: "4:30",
  },
];

export const data = [
  {
    image: img1,
    name: "Sacramento River Cats",
    events: 480,
    sport: "basketball",
  },
  {
    image: img2,
    name: "Las Vegas Aviators",
    events: 28,
    sport: "baseball",
  },
  {
    image: img3,
    name: "Sacramento River Cats",
    events: 480,
    sport: "basketball",
  },
  {
    image: img2,
    name: "Las Vegas Aviators",
    events: 28,
    sport: "baseball",
  },
];
