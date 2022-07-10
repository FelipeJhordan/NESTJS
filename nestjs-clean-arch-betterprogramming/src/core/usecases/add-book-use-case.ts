import { Injectable } from '@nestjs/common';
import { ICrmServices } from '../abstracts/crm-services-abstraction';
import { IDataServices } from '../abstracts/data-services.abstraction';
import { Book } from '../entities/entities';

@Injectable()
export class BookService {
  constructor(
    private dataServices: IDataServices,
    private crmServices: ICrmServices,
  ) {}

  async createBook(book: Book): Promise<Book> {
    try {
      const createdBook = await this.dataServices.books.create(book);
      await this.crmServices.bookAdded(createdBook);

      return createdBook;
    } catch (error) {
      throw new error();
    }
  }
}
