import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUsecase } from "./CreateSpecificationUsecase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUsecase = new CreateSpecificationUsecase(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUsecase
);

export { createSpecificationController };
