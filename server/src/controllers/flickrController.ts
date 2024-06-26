import { Request, Response } from 'express';
import FlickrService from '../services/flickrService';

export const getPublicPhotos = async (req: Request, res: Response) => {
  try {
    const photos = await FlickrService.getPublicPhotos();
    res.json(photos);
  } catch (error) {
    console.error('Error fetching public photos:', error);
    res.status(500).json({ message: 'Failed to fetch public photos' });
  }
};

export const searchPublicPhotos = async (req: Request, res: Response) => {
  const { tags } = req.query;
  if (!tags) {
    return res.status(400).json({ message: 'Tags parameter is required' });
  }

  try {
    const photos = await FlickrService.searchPublicPhotos(String(tags));
    res.json(photos);
  } catch (error) {
    console.error('Error searching photos:', error);
    res.status(500).json({ message: 'Failed to search photos' });
  }
};
