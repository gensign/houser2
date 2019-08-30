CREATE TABLE houser (
    id SERIAL PRIMARY KEY,
    property_name	 VARCHAR(30),
    the_address VARCHAR(100),
    city VARCHAR(100),
    ths_state VARCHAR(2),
    zip INTEGER,
    image TEXT,
    mortgage DECIMAL,
    rent DECIMAL
)

-- dummy data
INSERT INTO houser (property_name, the_address, city, the_state, zip, image, mortgage, rent)
VALUES ('11111', '11111', '1111111', '111111', 111111, '1111111', 111111, 111111),
('22222', '22222', '22222', '22222', 222222, '22222', 222222, 222222),
('33333', '33333', '33333', '33333', 33333, '3333', 33333, 333333);
