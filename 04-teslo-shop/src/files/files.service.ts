import { BadRequestException, Get, Injectable, Param } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const path = join(__dirname, '../../public/products', imageName);
    // console.log({path});

    if (!existsSync(path))
      throw new BadRequestException(`No product found with name ${imageName}`);

    return path;
  }
}
