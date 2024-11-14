import { z } from "zod";

const PERCENTILE_ERROR = "must be between 0 and 100";
const SCORE_ERROR = "must be between 0 and 15";

export const formSchema = z.object({
  rank: z.number().min(1, { message: "must be greater than 0" }),
  percentile: z
    .number()
    .min(0, { message: PERCENTILE_ERROR })
    .max(100, { message: PERCENTILE_ERROR }),
  score: z
    .number()
    .min(0, { message: SCORE_ERROR })
    .max(15, { message: SCORE_ERROR }),
});

export type FormSchema = z.infer<typeof formSchema>;
