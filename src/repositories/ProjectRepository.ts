import prismaClient from '../libs/prisma';

export class ProjectRepository {
  async findById(id: string) {
    return  prismaClient.project.findUnique({
      where: { id },
    });
  }

  async findByApiKey(apiKey: string) {
    return prismaClient.project.findUnique({
      where: { apiKey },
    });
  }

  async findByUser(userId: string) {
    return prismaClient.project.findMany({
      where: { userId },
    });
  }

  async create(data: {
    name: string;
    userId: string;
    apiKey: string;
  }) {
    return prismaClient.project.create({ data });
  }
}
