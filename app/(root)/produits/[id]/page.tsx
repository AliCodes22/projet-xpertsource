import ProductImage from "@/app/components/ProductImage";
import ProductPrice from "@/app/components/ProductPrice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { imageMap } from "@/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

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
            <Card className="shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {productData.name}
                </h1>
                <div className="mt-4 mb-6">
                  <p className="text-sm text-gray-600">
                    {productData.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-lg font-semibold text-gray-700">
                    Price:
                  </span>
                  <span className="text-xl font-bold text-black-600  px-3 py-1 rounded-lg">
                    ${productData.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Price:</span>
                <ProductPrice value={Number(productData.price)} />
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Status:</span>
                {productData.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {productData.stock > 0 && (
                <Button className="w-full mt-6">Add to Cart</Button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="mt-20">
        <Button asChild>
          <Link href="/produits">
            <IoMdArrowRoundBack />
            Back to Products
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ProductDetailsPage;
