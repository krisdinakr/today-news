export default interface ArticleResult {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

type Source = {
  id: string;
  name: string;
};
