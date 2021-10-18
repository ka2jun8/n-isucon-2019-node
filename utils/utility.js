"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalt = void 0;
const getSalt = () => {
    return require('crypto').randomBytes(64).toString('hex');
};
exports.getSalt = getSalt;
