-- Testimonials, "what is the infinity container", and "who is this for" were
-- removed as pages; drop their now-orphaned rows so they stop showing up in
-- /admin/seo.

delete from page_seo
where path in ('/testimonials', '/what-is-the-infinity-container', '/who-is-this-for');
