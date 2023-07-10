export type ProductType = {
  name: string;
  price: number | undefined;
  description: string;
  tags?: string;
  image?: string;
};

export type ProductWithId = ProductType & { id: string | number };
