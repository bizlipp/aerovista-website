import React from "react";
import Link from "next/link";
import CharacterGuide from "../components/CharacterGuide";

export default function Home() {
  return (
    <div>
      <CharacterGuide message="Welcome to your journey!" />
      <h1>Welcome to AeroVista</h1>
      <p>You bring the ideas, we help make them reality.</p>
      <nav>
        <ul>
          <li><Link href="/your-story">Begin Your Journey</Link></li>
          <li><Link href="/create">Unleash Your Creativity</Link></li>
          <li><Link href="/adventure">Join the Adventure</Link></li>
        </ul>
      </nav>
    </div>
  );
}