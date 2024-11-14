import type { FC, ReactNode } from "react";

export type FCProps<T = {}> = FC<
  T & Partial<{ children: ReactNode; className: string }>
>;
