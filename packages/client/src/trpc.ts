import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "api-server";

export const trpc = createReactQueryHooks<AppRouter>();
