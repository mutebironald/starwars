"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPersonByName = exports.fetchPeople = void 0;
const axios_1 = __importDefault(require("axios"));
const SWAPI_BASE_URI = 'https://swapi.dev/api';
function fetchPeople(page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = axios_1.default.get(`${SWAPI_BASE_URI}/people?page=${page}`);
        return (yield response).data.results;
    });
}
exports.fetchPeople = fetchPeople;
function searchPersonByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${SWAPI_BASE_URI}/people/?search=${name}`);
            return response.data.results[0] || null;
        }
        catch (error) {
            throw new Error(`Error fetching paerson`);
        }
    });
}
exports.searchPersonByName = searchPersonByName;
