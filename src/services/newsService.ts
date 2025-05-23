import { NewsResponse } from '@/types/news';

export const fetchNews = async (query: string, page: number = 1): Promise<NewsResponse> => {
  try {
    const response = await fetch(`/api/news?query=${encodeURIComponent(query)}&page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}; 