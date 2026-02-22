import { date, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const tournamentTable = pgTable("tournament", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  date: date().notNull(),
  location: varchar({ length: 255 }).notNull(),
});
