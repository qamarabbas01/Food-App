import React, { createContext, useContext, useState } from "react";

type FavoriteItem = {
  id: number;
  title: string;
  price: string;
  image: any;
};

type FavoritesContextType = {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavoriteItems((prevItems) => [...prevItems, item]);
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favoriteItems.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};