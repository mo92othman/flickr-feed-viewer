"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const FLICKR_API_URL = 'https://www.flickr.com/services/feeds/photos_public.gne';
const fetchJson = async (url) => {
    const response = await (0, node_fetch_1.default)(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
};
const FlickrService = {
    getPublicPhotos: async () => {
        const apiUrl = `${FLICKR_API_URL}?format=json&nojsoncallback=1&api_key=${process.env.FLICKR_API_KEY}`;
        const data = await fetchJson(apiUrl);
        return data.items;
    },
    searchPublicPhotos: async (tags) => {
        const apiUrl = `${FLICKR_API_URL}?format=json&nojsoncallback=1&tags=${tags}&api_key=${process.env.FLICKR_API_KEY}`;
        const data = await fetchJson(apiUrl);
        return data.items;
    },
};
exports.default = FlickrService;
