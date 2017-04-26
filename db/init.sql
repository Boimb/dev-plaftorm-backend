CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

------------------
-- CREATE TABLE --
------------------

CREATE TABLE t_user (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    active boolean DEFAULT false NOT NULL,
    is_admin boolean DEFAULT false NOT NULL, 
    last_connected timestamp NOT NULL default now(),
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_user ADD CONSTRAINT t_user_pkey PRIMARY KEY (id);
ALTER TABLE t_user OWNER TO postgres;

CREATE TABLE t_module (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    name character varying NOT NULL,
    img character varying NOT NULL,
    url character varying NOT NULL,
    slug character varying NOT NULL,
    online boolean DEFAULT false NOT NULL,
    min_gladys_version integer NOT NULL,
    max_gladys_version integer NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_module ADD CONSTRAINT t_module_pkey PRIMARY KEY (id);
ALTER TABLE t_module OWNER TO postgres;

CREATE TABLE t_module_text (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    module_id uuid NOT NULL,
    language character varying NOT NULL,
    description character varying NOT NULL,
    instruction_html character varying NOT NULL,
    instruction_markdown character varying NOT NULL,
    online boolean DEFAULT false NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_module_text ADD CONSTRAINT t_module_text_pkey PRIMARY KEY (id);
ALTER TABLE t_module_text OWNER TO postgres;

CREATE TABLE t_module_version (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    module_id uuid NOT NULL,
    version character varying NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_module_version ADD CONSTRAINT t_module_version_pkey PRIMARY KEY (id);
ALTER TABLE t_module_version OWNER TO postgres;

CREATE TABLE t_instance (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    user_id uuid,
    version character varying,
    os character varying,
    platform character varying,
    node_version character varying,
    latitude double precision, 
    longitude double precision,
    city character varying,
    zipcode character varying,
    country character varying,
    first_seen timestamp NOT NULL default now(),
    last_seen timestamp NOT NULL default now(),
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_instance ADD CONSTRAINT t_instance_pkey PRIMARY KEY (id);
ALTER TABLE t_instance OWNER TO postgres;

CREATE TABLE t_module_download (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    module_version_id uuid NOT NULL,
    instance_id uuid,
    network_hash character varying,
    source character varying,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_module_download ADD CONSTRAINT t_module_download_pkey PRIMARY KEY (id);
ALTER TABLE t_module_download OWNER TO postgres;

CREATE TABLE t_module_review (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    module_id uuid NOT NULL,
    user_id uuid NOT NULL,
    note integer NOT NULL,
    text character varying,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_module_review ADD CONSTRAINT t_module_review_pkey PRIMARY KEY (id);
ALTER TABLE t_module_review OWNER TO postgres;

CREATE TABLE t_script (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    name character varying NOT NULL,
    code character varying,
    description character varying NOT NULL,
    instruction_html character varying NOT NULL,
    instruction_markdown character varying NOT NULL,
    online boolean DEFAULT false NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_script ADD CONSTRAINT t_script_pkey PRIMARY KEY (id);
ALTER TABLE t_script OWNER TO postgres;

CREATE TABLE t_sentence (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    text character varying NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_sentence ADD CONSTRAINT t_sentence_pkey PRIMARY KEY (id);
ALTER TABLE t_sentence OWNER TO postgres;

CREATE TABLE t_sentence_vote (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    sentence_id uuid NOT NULL,
    user_id uuid NOT NULL,
    vote integer NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_sentence_vote ADD CONSTRAINT t_sentence_vote_pkey PRIMARY KEY (id);
ALTER TABLE t_sentence_vote OWNER TO postgres;

CREATE TABLE t_gladys_version (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    version character varying NOT NULL,
    created_at timestamp NOT NULL default now(),
    updated_at timestamp NOT NULL default now(),
    is_deleted boolean DEFAULT false NOT NULL
);

ALTER TABLE ONLY t_gladys_version ADD CONSTRAINT t_gladys_version_pkey PRIMARY KEY (id);
ALTER TABLE t_gladys_version OWNER TO postgres;

-------------------------
-- CREATE FOREIGN KEYS --
-------------------------

ALTER TABLE ONLY t_module
    ADD CONSTRAINT fk_t_module__user_id_t_user FOREIGN KEY (user_id) REFERENCES t_user(id);

ALTER TABLE ONLY t_module_text
    ADD CONSTRAINT fk_t_module_text__module_id_t_module FOREIGN KEY (module_id) REFERENCES t_module(id);

ALTER TABLE ONLY t_module_version
    ADD CONSTRAINT fk_t_module_version__module_id_t_module FOREIGN KEY (module_id) REFERENCES t_module(id);

ALTER TABLE ONLY t_instance
    ADD CONSTRAINT fk_t_instance__user_id_t_user FOREIGN KEY (user_id) REFERENCES t_user(id);

ALTER TABLE ONLY t_module_download
    ADD CONSTRAINT fk_t_module_download__module_version_id_t_module_version FOREIGN KEY (module_version_id) REFERENCES t_module_version(id);

ALTER TABLE ONLY t_module_download
    ADD CONSTRAINT fk_t_module_download__instance_id_t_instance FOREIGN KEY (instance_id) REFERENCES t_instance(id);

ALTER TABLE ONLY t_module_review
    ADD CONSTRAINT fk_t_module_review__module_id_t_module FOREIGN KEY (module_id) REFERENCES t_module(id);

ALTER TABLE ONLY t_module_review
    ADD CONSTRAINT fk_t_module_review__user_id_t_user FOREIGN KEY (user_id) REFERENCES t_user(id);

ALTER TABLE ONLY t_script
    ADD CONSTRAINT fk_t_script__user_id_t_user FOREIGN KEY (user_id) REFERENCES t_user(id);

ALTER TABLE ONLY t_sentence
    ADD CONSTRAINT fk_t_sentence__user_id_t_user FOREIGN KEY (user_id) REFERENCES t_user(id);

ALTER TABLE ONLY t_sentence_vote
    ADD CONSTRAINT fk_t_sentence_vote_user_id_t_user FOREIGN KEY (user_id) REFERENCES t_user(id);

ALTER TABLE ONLY t_sentence_vote
    ADD CONSTRAINT fk_t_sentence_vote_sentence_id_t_sentence FOREIGN KEY (sentence_id) REFERENCES t_sentence(id);

--------------------
-- CREATE INDEXES --
--------------------

CREATE INDEX ix_t_user_email ON t_user USING btree (lower(email));
CREATE INDEX ix_t_module_user_id ON t_module USING btree (user_id);
CREATE INDEX ix_t_module_text_module_id ON t_module_text USING btree (module_id);
CREATE INDEX ix_t_module_version_module_id ON t_module_version USING btree (module_id);
CREATE INDEX ix_t_instance_user_id ON t_instance USING btree (user_id);
CREATE INDEX ix_t_module_download_instance_id ON t_module_download USING btree (instance_id);
CREATE INDEX ix_t_module_download_module_version_id ON t_module_download USING btree (module_version_id);
CREATE INDEX ix_t_module_review_user_id ON t_module_review USING btree (user_id);
CREATE INDEX ix_t_module_review_module_id ON t_module_review USING btree (module_id);
CREATE INDEX ix_t_script_user_id ON t_script USING btree (user_id);
CREATE INDEX ix_t_sentence_user_id ON t_sentence USING btree (user_id);
CREATE INDEX ix_t_sentence_vote_user_id ON t_sentence_vote USING btree (user_id);
CREATE INDEX ix_t_sentence_vote_sentence_id ON t_sentence_vote USING btree (sentence_id);
CREATE INDEX ix_t_gladys_version_created_at ON t_gladys_version USING btree (created_at);

---------------------------
-- CREATE UNIQUE INDEXES --
---------------------------

--- No duplicate (user_id, sentence_id) row in t_sentence_vote table
--- Prevent a user from voting two times for the same sentence
CREATE UNIQUE INDEX ix_t_sentence_vote_sentence_id_user_id_unique on t_sentence_vote (user_id, sentence_id) WHERE (is_deleted = false);


