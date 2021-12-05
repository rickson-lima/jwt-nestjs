import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  // aqui ocorre toda a validacao
  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);

    if (!user)
      throw new UnauthorizedException(MessagesHelper.PASSWORD_OR_EMAIL_INVALID);

    return user;
  }
}
