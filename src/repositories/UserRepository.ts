import prismaClient from '../libs/prisma';
export class UserRepository {
  async findFirst(email: string) {
    return prismaClient.user.findUnique({
      where: { email },
    });
  }

  async findByEmail(email: string) {
    return prismaClient.user.findUnique({
      where: { email },
    });
  }

  async create(data: {
    name: string;
    email: string;
    password: string;
  }) {
    return prismaClient.user.create({ data });
  }
}
