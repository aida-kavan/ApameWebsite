'use client';
import { datas } from './data';
import Card from './CardStack';

export default function Home() {
  return (
    <main  >
      {
        datas.map((project, i) => {
          return (
            <>
            <h1>خدمات ما</h1>
            <Card
              key={`p_${i}`}
              title={project.title}
              description={project.description}
              color={project.color}
              i={i}
            />
            </>
          );
        })
      }
    </main>
  )
}