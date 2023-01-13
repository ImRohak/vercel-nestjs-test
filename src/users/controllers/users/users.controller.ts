import { Controller, Get, Post, Req, Res, Body, Param } from '@nestjs/common';
import { Request, Response } from "express";
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    @Get('/')
    getUsers() {
        return {msg: "Hello!"};
    }

    @Post('/register')
    register(@Body() userData: CreateUserDto ){
        console.log(userData);
        return {};
    }

    @Get(':id')
    getUserbyId(@Param('id') id: string, @Param('email') email: string) {
        console.log(id);
        return {};
    }
}