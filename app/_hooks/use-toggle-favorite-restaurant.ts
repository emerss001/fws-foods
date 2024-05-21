import { toast } from "sonner";
import { toglleFavoriteRestaurant } from "../_actions/restaurant";
import { useRouter } from "next/navigation";

interface useToggleFavoriteRestaurantProps {
  userId?: string;
  restaurantId: string;
  restaurantIsFavorited?: boolean;
}

const useToggleFavoriteRestaurant = ({
  userId,
  restaurantId,
  restaurantIsFavorited,
}: useToggleFavoriteRestaurantProps) => {
  const router = useRouter();

  const handleFavoriteClick = async () => {
    if (!userId) return;

    try {
      await toglleFavoriteRestaurant(userId, restaurantId);
      toast.success(
        restaurantIsFavorited
          ? "Restaurante removido dos favoritos."
          : "Restaurante adicionado aos favoritos.",
        {
          action: {
            label: "Ver Favoritos",
            onClick: () => router.push("/my-favorite-restaurants"),
          },
        },
      );
    } catch (error) {
      toast.error("Erro ao favoritar restaurante");
    }
  };
  return { handleFavoriteClick };
};

export default useToggleFavoriteRestaurant;
