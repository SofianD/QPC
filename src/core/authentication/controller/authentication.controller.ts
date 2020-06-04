import { Controller, Post, Body, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { User } from 'src/shared/models/user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { AuthenticationService } from '../service/authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private authService: AuthenticationService,
    ) {}

    @Post('login')
    async login(
        @Body() user: User
    ): Promise<{ user: User, accessToken: string, expiresIn: number}> {
        
        const userInDatabase = await this.authService.findFromEmail(user.email);

        if (!userInDatabase) {
            throw new HttpException({ message: 'User not found' }, HttpStatus.NOT_FOUND);
        }
    
        const result = bcrypt.compare(user.password, userInDatabase.password);
        if (!result) {
        throw new HttpException({ message: 'Authentification failed' }, HttpStatus.UNAUTHORIZED);
        }
        return {
            user: userInDatabase,
            accessToken: jwt.sign(
                {key: userInDatabase._id},
                '167CD6DC2E719C1CE671DBAEA8465'
            ),
            expiresIn: 3600
        }
    }
}
