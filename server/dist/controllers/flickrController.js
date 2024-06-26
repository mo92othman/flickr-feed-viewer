"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPublicPhotos = exports.getPublicPhotos = void 0;
const flickrService_1 = __importDefault(require("../services/flickrService"));
const getPublicPhotos = async (req, res) => {
    try {
        const photos = await flickrService_1.default.getPublicPhotos();
        res.json(photos);
    }
    catch (error) {
        console.error('Error fetching public photos:', error);
        res.status(500).json({ message: 'Failed to fetch public photos' });
    }
};
exports.getPublicPhotos = getPublicPhotos;
const searchPublicPhotos = async (req, res) => {
    const { tags } = req.query;
    if (!tags) {
        return res.status(400).json({ message: 'Tags parameter is required' });
    }
    try {
        const photos = await flickrService_1.default.searchPublicPhotos(String(tags));
        res.json(photos);
    }
    catch (error) {
        console.error('Error searching photos:', error);
        res.status(500).json({ message: 'Failed to search photos' });
    }
};
exports.searchPublicPhotos = searchPublicPhotos;
