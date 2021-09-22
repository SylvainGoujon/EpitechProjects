import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { Request } from 'express';
import { Response } from '../../model/response';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        if (!request?.cookies?.Authentication) {
          throw new UnauthorizedException(new Response(false, "Need authentication !", null));
        }
        return request?.cookies?.Authentication;
      }]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    });
  }

  async validate(payload: any) {
    if (!payload.is_admin) {
      throw new ForbiddenException(new Response(false, "You need admin account for that !", null));
    }
    return { userId: payload.id, username: payload.username, is_admin: payload.is_admin };
  }
}