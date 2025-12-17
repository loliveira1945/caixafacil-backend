import { UserRepository } from '../../repositories/UserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

class LoginUserService{
  async execute({email, password}: AuthRequest) {
    const userRepository = new UserRepository();

    const user = await userRepository.findByEmail(email);
    if(!user) throw new Error('Email/password incorrect');
    
    const passwordAuth = await compare(password, user.password);
    if(!passwordAuth) throw new Error('Email/password incorrect');

    const token = sign (
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET_KEY,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    );

    return {
      id: user.id, 
      name: user.name,
      email: user.email,
      token: token
    }
  }
}

export { LoginUserService }