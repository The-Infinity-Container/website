-- Adds a small gallery field to posts — up to 5 additional images shown on
-- the public post page, separate from the single cover_image_url.
alter table posts add column if not exists images text[] not null default '{}';
