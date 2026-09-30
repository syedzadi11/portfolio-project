import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateSkillDto } from './dto/create-skill.dto.js';
import { UpdateSkillDto } from './dto/update-skill.dto.js';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}

  create(createSkillDto: CreateSkillDto) {
    return this.prisma.skill.create({
      data: createSkillDto,
    });
  }

  findAll() {
    return this.prisma.skill.findMany();
  }

  findOne(id: number) {
    return this.prisma.skill.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.prisma.skill.update({
      where: { id },
      data: updateSkillDto,
    });
  }

  remove(id: number) {
    return this.prisma.skill.delete({
      where: { id },
    });
  }
}