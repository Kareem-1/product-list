CREATE TABLE IF NOT EXISTS "shirts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"shirtimage" text NOT NULL,
	"price" integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "shirts" USING btree ("id");