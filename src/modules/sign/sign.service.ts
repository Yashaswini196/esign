import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SignService {
  private apiUrl = 'https://api.opensignlabs.com/your-endpoint';
  // test.4ODR2Gkl6RrbbF8m8etjtj
  async addSignTag(pdfPath: string, role: string, email: string) {
    const response = await axios.post(`${this.apiUrl}/addSignTag`, {
      filePath: pdfPath,
      role: role,
      email: email,
    });
    return response.data;
  }

  async submitForESign(pdfPath: string) {
    const response = await axios.post(`${this.apiUrl}/submitESign`, {
      filePath: pdfPath,
    });
    return response.data;
  }
}
