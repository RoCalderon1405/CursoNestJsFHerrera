import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter], //exports para usarlo en cualquier parte del proyecto
})
export class CommonModule {}
