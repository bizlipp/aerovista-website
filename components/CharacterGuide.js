import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CharacterGuide = ({ message }) => (
  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
    <Image src="/animated-character.gif" alt="Guide Character" width={150} height={150} />
    <p>{message}</p>
  </motion.div>
);

export default CharacterGuide;