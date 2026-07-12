alter table posts add column if not exists claude_readability_score integer
  check (claude_readability_score is null or (claude_readability_score >= 1 and claude_readability_score <= 100));
