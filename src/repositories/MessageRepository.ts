import prismaClient from '../libs/prisma';

export class MessageRepository {
  async findById(id: string) {
    return prismaClient.message.findUnique({
      where: { id },
    });
  }

  async findByProject(projectId: string) {
    return prismaClient.message.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: {
    projectId: string;
    from: string;
    subject?: string;
    body: string;
  }) {
    return prismaClient.message.create({ data });
  }
}
