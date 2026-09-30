import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service.js';
import { SkillsController } from './skills.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}