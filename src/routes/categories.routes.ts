import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (resquest, response) => {
  const { name, description } = resquest.body;

  const category = new Category();

  Object.assign(category, { name, description, created_at: new Date() });

  categories.push(category);

  return response.status(201).json({ categories });
});

export { categoriesRoutes };
