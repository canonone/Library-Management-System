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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcryptjs");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userService;
    jwtService;
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(body) {
        const { password, ...result } = body;
        const check = await this.userService.findByEmail(body.email);
        if (check) {
            throw new common_1.NotFoundException('user already exist');
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
        body.password = hashedPassword;
        const user = await this.userService.createUser(body);
        const jwtPayload = { sub: user.id, email: user.email };
        const token = this.generateToken(jwtPayload);
        return {
            message: 'User account created successfully',
            token: token,
            data: { ...result },
        };
    }
    async validateUser(password, email) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException('user does not exist');
        }
        const extinguisher = await bcrypt.compare(password, user.password);
        if (!extinguisher) {
            throw new common_1.NotFoundException('incorrect password');
        }
        return user;
    }
    generateToken(payload) {
        return this.jwtService.sign(payload);
    }
    async loginUser(loginDto) {
        const user = await this.userService.findByEmail(loginDto.email);
        if (!user) {
            throw new common_1.NotFoundException('user does not exist');
        }
        const { password, ...result } = user;
        const payload = { sub: user.id, email: user.email };
        const token = this.generateToken(payload);
        return {
            message: 'Login successfully',
            token: token,
            data: { ...result },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map