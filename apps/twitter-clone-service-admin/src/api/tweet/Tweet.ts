export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  tweetContent: string | null;
  tweetCreatedAt: Date | null;
  tweetAuthor: string | null;
};
