import { Module } from '@nestjs/common';
import { BossController } from './boss.controller';
import { BossService } from './boss.service';

@Module({
  controllers: [BossController],
  providers: [BossService]
})
export class BossModule {}
