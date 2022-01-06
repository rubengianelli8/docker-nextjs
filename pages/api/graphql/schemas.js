import { DateTimeTypeDefinition } from "graphql-scalars";
import { demo } from "./demo";
import { error } from "./error";

export const schemas = [DateTimeTypeDefinition, demo.schema, error.schema];
