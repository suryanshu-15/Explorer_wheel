import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { PHONE } from '../config'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE || '+918984192523'}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-6 z-50 shadow-lg rounded-full p-3 bg-green-500 text-white hover:bg-green-600 transition"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </a>
  )
}
