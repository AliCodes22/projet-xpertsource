"use client";

import { useRouter } from "next/navigation"; // Router pour pouvoir naviguer dans l'application

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material"; // Material-UI components pour le style
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// type pour les props du Card
type CardProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

// Card cree avec Material-UI. Affiche details du produit incluant le nom, prix et description
const MuiCard = ({ id, name, description, image, price }: CardProps) => {
  const router: AppRouterInstance = useRouter();

  return (
    <Box className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
      <Card className="h-full flex flex-col shadow-md hover:shadow-lg  transition-shadow duration-300">
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
          className="object-cover"
        />
        <CardContent className="flex-grow">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-bold"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-2"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions className="mt-auto flex justify-between">
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => {
              router.push(`/produits/${id}`);
            }}
          >
            Details
          </Button>
          <Typography variant="body1" className="font-semibold text-black-600">
            ${price}
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
