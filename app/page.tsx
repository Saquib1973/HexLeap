"use client";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import img4 from "../public/3.jpeg";
import { data, ticket } from "@/utils/utils";
interface TicketProps {
  image: StaticImageData;
  location: string;
  name: string;
  time: string;
  date: string;
  day: string;
}
interface DataProps {
  image: StaticImageData;
  name: string;
  events: number;
  sport: string;
}

export default function Home() {
  const ticketContainerRef = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollOffset: number) => {
    if (ticketContainerRef.current) {
      ticketContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth", // Adding smooth scroll behavior
      });
    }
  };

  return (
    <div>
      {/* Sports */}
      <div className="flex flex-col items-center justify-center md:max-w-6xl px-4 gap-6 mx-auto">
        <div className="text-xl text font-medium inline justify-start w-full py-10 pb-6 max-md:ml-10">
          Sports
          <div className="h-0.5 rounded-xl w-16 bg-blue" />
        </div>
        <div className="flex max-md:flex-col-reverse gap-2 justify-around items-start">
          {/* content */}
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex max-lg:flex-wrap justify-start max-md:justify-center gap-3">
              {data.map((data, i) => (
                <DataComp key={i} {...data} />
              ))}
            </div>
            <button className="mx-auto p-3 bg-blue text-white inline-block hover:bg-blue/80 rounded-sm">
              See More
            </button>
          </div>
          {/* ad */}
          <div className="bg-[#FFFFFF] rounded-sm flex flex-col items-start justify-start gap-2 dark:bg-[#3B3E47] p-3 max-md:mx-10 md:max-w-[20%] h-[400px]">
            <Image
              src={img4}
              alt="logo"
              className="h-48 w-48 object-cover mx-auto"
            />
            <p className="text">Advertisement title</p>
            <p className="text-xs text overflow-y-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      {/* Highlights */}
      <div className="bg-black dark:bg-white mx-2 md:mx-40 xl:mx-52 2xl:mx-80 my-10 max-lg:px-2 p-8 rounded-md">
        <p className="text-4xl font-semibold text-white dark:text-black text-center">
          Collection Spotlight
        </p>
        <p className="text text-xs mx-auto text-white dark:text-black text-center mt-2 md:w-[50%]">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <div className="flex justify-between gap-2 items-center mt-6 overflow-x-auto">
          <ArrowLeftIcon
            className="size-14 max-md:size-20 border-2 border-blue text-blue cursor-pointer p-1 "
            onClick={() => handleScroll(-150)}
          />

          <div
            ref={ticketContainerRef}
            id="ticketContainer"
            className="flex gap-6 p-6 snap-x-mandatory overflow-x-auto"
            style={{ maxWidth: "90vw" }}
          >
            {ticket.map((ticketProps, i) => (
              <Ticket key={i} {...ticketProps} />
            ))}
          </div>
          <ArrowRightIcon
            className="size-14 max-md:size-20 border-2 border-blue text-blue cursor-pointer p-1 "
            onClick={() => handleScroll(150)}
          />
        </div>
      </div>
    </div>
  );
}
const DataComp: React.FC<DataProps> = ({ image, name, events, sport }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-sm max-lg:w-[30%] max-md:w-[45%] h-[400px] w-full flex flex-col gap-2 dark:bg-[#3B3E47] p-3">
      <Image
        src={image}
        alt="logo"
        className="h-72 w-48 object-cover mx-auto"
      />
      <p className="line-clamp-1 text">{name}</p>
      <div className="dark:bg-black bg-white rounded-sm p-2 flex justify-between">
        <div className="text-xs text-black dark:text-white">
          <p className="text-xs text-black/60 dark:text-white/60">
            Total Events
          </p>
          {events}
        </div>
        <div className="text-xs text-black dark:text-white">
          <p className="text-xs text-black/60 dark:text-white/60">Sport</p>
          {sport}
        </div>
      </div>
    </div>
  );
};

const Ticket: React.FC<TicketProps> = ({
  image,
  location,
  name,
  time,
  date,
  day,
}) => {
  return (
    <div
      className="flex flex-col items-center dark:bg-black bg-white py-4 pb-2 rounded-md shadow-md snap-start"
      style={{ minWidth: "200px" }}
    >
      <Image
        src={image}
        alt="ticket"
        className="h-60 w-32 object-cover rounded-md"
      />
      <div className="relative w-full mt-4">
        <div className="dark:bg-white bg-black size-4 rounded-full absolute -left-2 -translate-y-1/2 " />
        <hr className="border-dashed border-0.5 border-black/40 w-full" />
        <div className="dark:bg-white bg-black size-4 rounded-full absolute -right-2 -translate-y-1/2 " />
      </div>
      <div className="mx-4 flex flex-col items-center justify-center">
        <p className="text-sm font-semibold text">{name}</p>
        <p className="text-xs text">
          {day}, {date} - {time}
        </p>
        <p className="text-xs tracking-tight text text-center">{location}</p>
        <button className="text-xs m-1 rounded-sm px-2 bg-black text-white p-1">
          Take Flight Collection
        </button>
      </div>
    </div>
  );
};
