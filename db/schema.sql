CREATE TABLE sellers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug VARCHAR(64) NOT NULL UNIQUE,
  name VARCHAR(128) NOT NULL,
  short_description VARCHAR(255) NOT NULL,
  detail_content TEXT,
  logo_url VARCHAR(255),
  official_url VARCHAR(255),
  invite_url TEXT NOT NULL,
  tags JSON,
  featured BOOLEAN NOT NULL DEFAULT TRUE,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE click_logs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  seller_id BIGINT REFERENCES sellers(id),
  seller_slug VARCHAR(64) NOT NULL,
  request_id VARCHAR(64) NOT NULL,
  clicked_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  referer TEXT,
  landing_page TEXT,
  ip_hash VARCHAR(128),
  user_agent TEXT,
  device_type VARCHAR(20),
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  utm_content VARCHAR(100),
  query_string TEXT,
  is_unique_hint BOOLEAN,
  redirect_target TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_click_logs_seller_slug_clicked_at
  ON click_logs (seller_slug, clicked_at);

CREATE INDEX idx_click_logs_utm_campaign
  ON click_logs (utm_campaign);
