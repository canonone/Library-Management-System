"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.AccountType = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../utils/base.model");
const profile_model_1 = require("../../profile/entities/profile.model");
var AccountType;
(function (AccountType) {
    AccountType["USER"] = "user";
    AccountType["ADMIN"] = "admin";
})(AccountType || (exports.AccountType = AccountType = {}));
let User = class User extends base_model_1.default {
    password;
    email;
    username;
    accountType;
    profile;
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: AccountType,
        default: AccountType.USER,
    }),
    __metadata("design:type", String)
], User.prototype, "accountType", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_model_1.Profile, (profile) => profile.user),
    __metadata("design:type", profile_model_1.Profile)
], User.prototype, "profile", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.model.js.map