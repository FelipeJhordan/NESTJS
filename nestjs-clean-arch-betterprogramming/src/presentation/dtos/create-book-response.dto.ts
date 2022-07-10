import { Book } from 'src/core/entities/entities';

export class CreateBookResponseDto {
  success: boolean;

  createdBook: Book;
}
