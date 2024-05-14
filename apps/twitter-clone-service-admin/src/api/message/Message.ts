export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  recipient: string | null;
  content: string | null;
  sender: string | null;
};
