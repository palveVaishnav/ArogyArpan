"use client";
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/utils/Testimonials";
export default function Testimonial() {
  return (
    <div className="rounded-md grid items-center justify-center relative overflow-hidden gap-3">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
        
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}
