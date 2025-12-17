import { ConflictError } from '../../errors/ConflictError';
import { ValidationError } from '../../errors/ValidationError';
import { UserRepository } from '../../repositories/UserRepository';

import { hash } from 'bcryptjs';

interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({ name, email, password }: UserCreateRequest) {
    if (!email) {
      throw new ValidationError("Email incorrect");
    }

    const userRepository = new UserRepository();

    const userAlreadyExists = await userRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new ConflictError("User already exists");
    }

    const passwordHash = await hash(password, 8);
    const user = await userRepository.create({
      name,
      email,
      password: passwordHash
    });

    return user;
  }
}

export { CreateUserService }