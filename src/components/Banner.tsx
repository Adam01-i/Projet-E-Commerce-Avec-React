import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto h-full-screen px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Bienvenue sur K-Shop
            </h1>
            <p className="mt-3 text-indigo-100">
              Koundoulshop, votre boutique en ligne au Sénégal. Livraison rapide, paiement sécurisé (Wave, Orange Money).
            </p>
            <div className="mt-6">
              <Link
                to="#products"
                className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-md shadow hover:bg-indigo-50"
              >
                Découvrir les produits
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative h-max md:h-48 rounded-xl overflow-hidden">
              <img
                src="/image.webp"
                alt="K-Shop Banner"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}