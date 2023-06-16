import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreatedCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    return null;
  }

  listen(): Category[] {
    return null;
  }

  create({ name, description }: ICreatedCategoryDTO): void {
    return null;
  }
}

export { ICategoriesRepository };
