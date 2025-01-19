import ProductImage from "@/app/components/ProductImage";
import ProductPrice from "@/app/components/ProductPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { imageMap } from "@/utils";
import { notFound } from "next/navigation";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;

  const product = await fetch(
    `https://api.jsoning.com/mock/public/products/${id}`
  );

  if (!product) {
    notFound();
  }

  const productData = await product.json();

  console.log(productData);

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column */}
          <div className="col-span-2">
            <ProductImage image={imageMap[productData.name]} />
          </div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {productData.name} {productData.category}
              </p>
              <h1 className="h3-bold">{productData.name}</h1>
              <p>
                {productData.rating.rate} of {productData.rating.count} reviews
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice
                  value={Number(productData.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 p-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{productData.description}</p>
            </div>
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="m-2 flex justify-between">
                <div>Price</div>
                <ProductPrice value={Number(productData.price)} />
              </div>
              <div className="m-2 flex justify-between ">
                <div>Status</div>
                {productData.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {productData.stock > 0 && (
                <div className="flex flex-center">
                  <Button className="w-full">Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
