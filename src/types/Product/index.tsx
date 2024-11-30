export interface IProduct {
  id: number
  subtitle: string
  meta_title: string
  meta_description: string
  slug: string
  description: string
  brand: string
  average_rating: number
  countInStock: number
  is_available: boolean
  status: boolean
  qr_code: string
  product_details?: {
    variants?: string
      width?: number,
      height?: number,
      length?: number,
      origin_country?: string,
      material?: string,

  }
  tag: [any]

  images: [any]
  category: any
  thumbnail: any;
  title: string
  price: number
  tags: string[]
  discountable: {
    status: boolean,
    percent: number
  }
}