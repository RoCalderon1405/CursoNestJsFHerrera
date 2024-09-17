import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetRowHeaders = createParamDecorator(
  (data:string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const rawHeaders = req[data];

    return rawHeaders;
  },
);
