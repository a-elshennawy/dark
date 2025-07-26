"use client";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./CommBar.module.scss";
import { motion } from "motion/react";
export default function CommBar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        className={`${styles.CommBar}`}
      >
        <span>
          <a href="https://www.tiktok.com/@itsdvrk_" target="_blank">
            <FaTiktok />
          </a>
        </span>
        <span>
          <a
            href="https://discord.com/channels/1141035389491105855/1141045307178750143"
            target="_blank"
          >
            <FaDiscord />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/itsdvrk_/" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </motion.div>
    </>
  );
}
