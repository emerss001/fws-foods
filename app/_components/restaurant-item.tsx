"use client";

import { Restaurant, UserFavoriteRestaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import Link from "next/link";
import { toglleFavoriteRestaurant } from "../_actions/restaurant";
import { toast } from "sonner";

interface RestaurantItemProps {
  userId?: string;
  restaurant: Restaurant;
  className?: string;
  userFavoriteRestaurats: UserFavoriteRestaurant[];
}

const RestaurantItem = ({
  restaurant,
  userId,
  userFavoriteRestaurats,
}: RestaurantItemProps) => {
  const isFavorite = userFavoriteRestaurats.some(
    (fav) => fav.restaurantId === restaurant.id,
  );

  const handleFavoriteClick = async () => {
    if (!userId) return;

    try {
      await toglleFavoriteRestaurant(userId, restaurant.id);
      toast.success(
        isFavorite
          ? "Restaurante removido dos favoritos."
          : "Restaurante adicionado aos favoritos.",
      );
    } catch (error) {
      toast.error("Erro ao favoritar restaurante");
    }
  };

  return (
    <div className="min-w-[266px] max-w-[266px]">
      <div className="w-full space-y-3">
        {/* IMAGEM */}
        <div className="relative h-[136px] w-full">
          <Link href={`/restaurants/${restaurant.id}`}>
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="rounded-lg object-cover"
            />
          </Link>

          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary bg-white px-2 py-[2px]">
            <StarIcon size={12} className="fill-yellow-400 text-yellow-500" />
            <span className="text-xs font-semibold">5.0</span>
          </div>

          {userId && (
            <Button
              size="icon"
              className={`absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700 ${isFavorite && "bg-primary hover:bg-gray-700"}`}
              onClick={handleFavoriteClick}
            >
              <HeartIcon size={16} className="fill-white" />
            </Button>
          )}
        </div>
        {/* TEXTO */}
        <div>
          <h3 className="text-sm font-semibold">{restaurant.name}</h3>
          {/* INFORMAÇÕES DA ENTREGA */}
          <div className="flex gap-3">
            {/* CUSTO DE ENTREGA */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <BikeIcon size={14} className="text-primary" />
              <span className="text-xs">
                {Number(restaurant.deliveryFee) === 0
                  ? "Entrega grátis"
                  : formatCurrency(Number(restaurant.deliveryFee))}
              </span>
            </div>
            {/* TEMPO DE ENTREGA */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <TimerIcon size={14} className="text-primary" />
              <span className="text-xs">
                {restaurant.deliveryTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
