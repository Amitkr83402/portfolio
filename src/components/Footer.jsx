import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-darkDesert">
      <div className="flex flex-col items-center justify-center py-2 px-2 sm:flex-row sm:justify-between sm:py-4 sm:px-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="hover:text-goldDesert transition-colors duration-300 text-sm text-lightDesert sm:text-center"
          >
            2025 © All CopyRights Reserved
          </a>
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
