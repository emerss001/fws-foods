import { UserFavoriteRestaurant } from "@prisma/client";

export const isRestaurantFavorited = (
  restaurantId: string,
  userFavoriteResraurant: UserFavoriteRestaurant[],
) => userFavoriteResraurant?.some((fav) => fav.restaurantId === restaurantId);
