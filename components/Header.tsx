'use client'
import React from 'react';
import Wave from './Wave';
export default function Header() {
  return (
    <>
      <div className="w-full flex flex-col gap-16 items-center bg-mint">
        <p className="mt-10 text-white font-medium text-5xl lg:text-6xl !leading-tight mx-auto text-center">
          Recovery Consultants
        </p>
        <p className="text-3xl text-white font-medium lg:text-4xl !leading-tight mx-auto text-center">
          Client management system
        </p>
      </div>
    <Wave/>
    </>
  );
}
