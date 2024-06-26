"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const flickrController_1 = require("../controllers/flickrController");
exports.router = express_1.default.Router();
// GET /api/flickr/public-photos
exports.router.get('/public-photos', flickrController_1.getPublicPhotos);
// GET /api/flickr/search/photos?tags=cats
exports.router.get('/search/photos', flickrController_1.searchPublicPhotos);
exports.default = exports.router;
