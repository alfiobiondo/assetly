-- Assetly accesses these tables only through the Express API and Prisma.
-- There is intentionally no direct access through the Supabase Data API.

ALTER TABLE "public"."User" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."WatchlistItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."Asset" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."_prisma_migrations" ENABLE ROW LEVEL SECURITY;

-- PostgreSQL grants no table privileges to PUBLIC by default, but revoke them
-- explicitly so these backend-owned tables cannot be exposed through an
-- inherited or previously added PUBLIC grant.
REVOKE ALL PRIVILEGES ON TABLE
  "public"."User",
  "public"."WatchlistItem",
  "public"."Asset",
  "public"."_prisma_migrations"
FROM PUBLIC;

-- Supabase provides anon/authenticated roles, while a plain local PostgreSQL
-- instance may not. Keep the migration portable for both environments.
DO $migration$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    REVOKE ALL PRIVILEGES ON TABLE
      "public"."User",
      "public"."WatchlistItem",
      "public"."Asset",
      "public"."_prisma_migrations"
    FROM anon;

    ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
      REVOKE ALL PRIVILEGES ON TABLES FROM anon;
    ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
      REVOKE ALL PRIVILEGES ON SEQUENCES FROM anon;
  END IF;

  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    REVOKE ALL PRIVILEGES ON TABLE
      "public"."User",
      "public"."WatchlistItem",
      "public"."Asset",
      "public"."_prisma_migrations"
    FROM authenticated;

    ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
      REVOKE ALL PRIVILEGES ON TABLES FROM authenticated;
    ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
      REVOKE ALL PRIVILEGES ON SEQUENCES FROM authenticated;
  END IF;
END
$migration$;
