CREATE TABLE items (price INT, amount INT);

INSERT INTO items VALUES (10, 5), (20, 2);

SELECT price, amount, price * amount AS total FROM items;
