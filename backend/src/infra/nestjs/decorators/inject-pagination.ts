import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Paged, PagedParams } from './../../../domain/_shared/paged';

export const InjectPagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): PagedParams => {
    const request = ctx.switchToHttp().getRequest();
    return Paged.getParams(request.query);
  },
);
