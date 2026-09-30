import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { MessagesModule } from './messages/messages.module.js';
import { ProjectsModule } from './projects/projects.module.js';
import { SkillsModule } from './skills/skills.module.js';

@Module({
  imports: [PrismaModule, MessagesModule, ProjectsModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}