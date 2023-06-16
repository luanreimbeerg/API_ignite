import { Category } from "../model/Category";

interface ICreatedCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  listen(): Category[];
  create({ name, description }: ICreatedCategoryDTO): void;
}

export { ICategoriesRepository, ICreatedCategoryDTO };
