import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, of } from 'rxjs';
import { User } from '../user/entities/user.entity';
const bcrypt = require('bcrypt');
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  // generating new jwt token
  async generateJWT(user: User): Promise<string> {
    return this.jwtService.signAsync(user);
  }
  // hashing the pasword
  hashPassword(password: string): Observable<string> {
    return bcrypt.hash(password, 12);
  }
  // comparing the new password and the hashed one
  comparePassword(newPassword: string, passwordHash: string) {
    return of<any | boolean>(bcrypt.comparePassword(newPassword, passwordHash));
  }
}
