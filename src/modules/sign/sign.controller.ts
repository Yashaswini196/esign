import { Controller, Post, Body } from '@nestjs/common';
import { SignService } from './sign.service';

@Controller('sign')
export class SignController {
  constructor(private readonly signService: SignService) {}

  @Post('add')
  addSign(@Body() body: { filePath: string, role: string, email: string }) {
    return this.signService.addSignTag(body.filePath, body.role, body.email);
  }

  @Post('submit')
  submitSign(@Body() body: { filePath: string }) {
    return this.signService.submitForESign(body.filePath);
  }
}
