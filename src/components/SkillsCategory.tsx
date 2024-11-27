import React from 'react';

interface SkillsCategoryProps {
  title: string;
  items: string[];
  bgClass: string;
}

const SkillsCategory: React.FC<SkillsCategoryProps> = ({ title, items, bgClass }) => {
  return (
    <section className="flex flex-col lg:items-center space-y-4 pb-4 lg:pb-8">
      <div
        className={`w-48 h-48 ${bgClass} rounded-full items-center justify-center text-center text-white font-bold text-2xl text-shadow hidden lg:flex`}
      >
        {title}
      </div>
      <h2 className="font-bold text-lg lg:hidden">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsCategory;