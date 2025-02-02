export interface Order {
  status: string
  totalAmount: number
  createdAt: string
  _id:  | null | undefined
  data?: {
    _id: string
    product: string
    date: string
    total: string
    status: string
    totalAmount: number

  }
}
