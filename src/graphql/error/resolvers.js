import { error } from "@/models/error";

export const resolvers = {
	Query: {
		getErrors: (_parent, _args, _context) => {
			return error.getError(_parent, _args, _context);
		},
	}
};
