import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function Card({ image, title, description, buttonText, onButtonClick }: CardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-[280px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-lg font-bold text-text-strong">{title}</h3>
          <p className="text-base text-text-strong/70 leading-relaxed">{description}</p>
        </div>
        <Button variant="primary" size="base" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}


