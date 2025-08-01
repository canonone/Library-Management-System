import { PartialType } from "@nestjs/mapped-types";
import { UserDto } from "./create-user.dto";

export class updateUserDto extends PartialType(UserDto){}