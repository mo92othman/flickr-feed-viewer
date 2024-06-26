import express from 'express';
import { getPublicPhotos, searchPublicPhotos } from '../controllers/flickrController';

export const router = express.Router();

// GET /api/flickr/public-photos
router.get('/public-photos', getPublicPhotos);

// GET /api/flickr/search/photos?tags=cats
router.get('/search/photos', searchPublicPhotos);

export default router;
