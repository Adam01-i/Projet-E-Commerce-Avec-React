import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Banner() {
  // Real, high-quality hero image (market/shop street in Africa for authenticity)
  const bgUrl = 'https://images.unsplash.com/photo-1588359348345-5d5f50d690c2?q=80&w=1600&auto=format&fit=crop';

  return (
    <section className="relative w-full min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-9rem)] overflow-hidden">
      <img
        src={bgUrl}
        alt="K-Shop Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            K-Shop, votre boutique en ligne au Sénégal
          </h1>
          <p className="mt-4 md:mt-6 text-indigo-100 text-base md:text-lg">
            Livraison rapide à Dakar et dans tout le pays. Paiement sécurisé via Wave et Orange Money.
          </p>
          <div className="mt-8">
            <Link
              to="#products"
              className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-md shadow hover:bg-indigo-50"
            >
              Découvrir les produits
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}