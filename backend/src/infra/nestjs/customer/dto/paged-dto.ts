import { Paged } from 'src/domain/_shared/paged';
import { ApiProperty } from '@nestjs/swagger';

export function PagedDto(dto: any): any {
  class PagedDto implements Paged<any> {
    @ApiProperty({ isArray: true, type: dto })
    items: any[];
    @ApiProperty()
    total: number;
    @ApiProperty()
    limit: number;
    @ApiProperty()
    offset: number;
  }
  Object.defineProperty(PagedDto, 'name', { value: `Paged${dto.name}` });
  return PagedDto;
}
