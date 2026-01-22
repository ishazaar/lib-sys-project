export interface Book {
  id: number;
  title: string;
  author: string;
  isAvailable: boolean;
  category?: string;      // Optional field
  description?: string;   // Optional field
}
export interface Member {
  id: number;
  name: string;
  email: string;
}

export interface Transaction {
  transactionId: string;
  bookId: number;
  memberId: number;
  type: 'BORROW' | 'RETURN';
  date: Date;
}
