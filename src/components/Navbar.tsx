import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Home, LogOut, Search, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Rediriger vers la page d'accueil avec le terme de recherche
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto">
          {/* Top bar with logo and user actions */}
          <div className="border-b border-gray-100">
            <div className="flex items-center justify-between h-16 px-4">
              <Link to="/" className="flex items-center space-x-3">
                <Home className="h-8 w-8 text-indigo-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  E-Shop
                </span>
              </Link>

              <div className="flex items-center space-x-6">
                <Link to="/cart" className="relative p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <ShoppingCart className="h-6 w-6 text-gray-600" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                      {itemCount}
                    </span>
                  )}
                </Link>

                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-700 hidden md:block">{user.email}</span>
                    <button
                      onClick={handleSignOut}
                      className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                    >
                      <LogOut className="h-6 w-6 text-gray-600" />
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login"
                    className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                  >
                    <User className="h-6 w-6 text-gray-600" />
                  </Link>
                )}

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors md:hidden"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-600" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-4 py-4 hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un produit..."
                  className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-shadow"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="h-12 px-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
              >
                Rechercher
              </button>
            </form>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-4 py-3 border-t border-gray-100">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-shadow"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="h-10 px-6 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer pour compenser la hauteur de la navbar fixe */}
      <div className="h-32 md:h-36"></div>
    </>
  );
}