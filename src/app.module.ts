import { Module } from '@nestjs/common';
import { SignModule } from './modules/sign/sign.module';
import { PdfModule } from './modules/pdf/pdf.module';

@Module({
  imports: [SignModule, PdfModule],
})
export class AppModule {}
