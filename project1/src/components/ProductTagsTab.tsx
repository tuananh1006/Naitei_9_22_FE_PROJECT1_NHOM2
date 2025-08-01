import { Product } from "@/types/Product";

interface ProductTagsTabProps {
  product: Product;
}

export default function ProductTagsTab({ product }: ProductTagsTabProps) {
  return (
    <div className="p-6 border-1 border-t-0 border-gray-300">
      <div className="prose max-w-none">
        {product.type?.map((tag: string, index: number) => (
          <p key={index} className="text-gray-700 text-sm leading-relaxed mt-4">
            #{tag}
          </p>
        ))}
      </div>
    </div>
  );
}

