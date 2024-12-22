import React from 'react';

export const Input = ({ placeholder }: { placeholder: string }) => {
  return <input className="border px-4 py-2 rounded" placeholder={placeholder} />;
};
