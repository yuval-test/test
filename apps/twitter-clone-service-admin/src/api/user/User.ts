export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  avatarUrl: string | null;
  email: string | null;
  password: string | null;
  bio: string | null;
};
