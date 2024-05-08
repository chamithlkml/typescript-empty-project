"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const should_1 = __importDefault(require("should"));
describe('test index', () => {
    it('Should test code', (done) => {
        (0, should_1.default)(true).eql(true);
        done();
    });
});
