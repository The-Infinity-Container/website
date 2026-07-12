alter table posts add column if not exists focus_keyphrase text not null default '';
alter table posts add column if not exists seo_title text not null default '';
alter table posts add column if not exists meta_description text not null default '';
alter table posts add column if not exists alt_text text not null default '';
