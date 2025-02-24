import React, { useState } from "react";
import Link from "next/link";
import CharacterGuide from "../components/CharacterGuide";

export default function YourStory() {
  const [message, setMessage] = useState("Your guide through this journey!");

  return (
    <div>
      <CharacterGuide message={message} />
      <h1>Your Story Begins Here</h1>
      <p>Every great adventure starts with a choice. What path will you take?</p>
      <section>
        <h2>Choose Your Path</h2>
        <ul>
          <li><Link href="/your-story?path=innovation" onMouseEnter={() => setMessage("Forge new ideas and reshape the future!")}>🌟 Forge New Ideas</Link></li>
          <li><Link href="/your-story?path=storytelling" onMouseEnter={() => setMessage("Weave compelling tales that captivate the world!")}>📖 Craft a Narrative</Link></li>
          <li><Link href="/your-story?path=media" onMouseEnter={() => setMessage("Create stunning digital experiences!")}>🎨 Dive into Digital Realms</Link></li>
        </ul>
      </section>
    </div>
  );
}