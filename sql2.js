// -- Practice Joins 

// -- SELECT * FROM invoice 
// -- JOIN invoice_line ON invoice_line.invoice_id = invoice.invoice_id
// -- WHERE invoice_line.unit_price > 0.99; 

// -- SELECT i.invoice_date, c.first_name, c.last_name, i.total
// -- FROM invoice i 
// -- JOIN customer c ON i.customer_id = c.customer_id; 

// -- SELECT e.first_name, e.last_name, c.first_name, c.last_name
// -- FROM employee e 
// -- JOIN customer c ON c.support_rep_id = e.employee_id; 

// -- SELECT a.title, ar.name
// -- FROM album a 
// -- JOIN artist ar ON ar.artist_id = a.artist_id; 

// -- SELECT plt.track_id
// -- FROM playlist_track plt 
// -- JOIN playlist p ON  plt.track_id = p.playlist_id 
// -- WHERE p.name = 'Music'; 

// -- SELECT t.name 
// -- FROM track t 
// -- JOIN playlist_track pt ON t.track_id = pt.track_id 
// -- WHERE pt.playlist_id = 5; 

// -- SELECT t.name 
// -- FROM track t 
// -- JOIN playlist_track pt ON t.track_id = pt.track_id  
// -- JOIN playlist p ON pt.playlist_id = p.playlist_id; 

// -- SELECT t.name, a.title 
// -- FROM track t 
// -- JOIN album a ON t.album_id= a.album_id 
// -- JOIN genre g ON g.genre_id = t.genre_id
// -- WHERE g.name = 'Alternative & Punk'; 

// -- SELECT pl.track_id
// -- FROM playlist_track pl 
// -- JOIN playlist p ON  pl.track_id = p.playlist_id 
// -- WHERE p.name = 'Music'; 

//BLACK Diamond 

// SELECT t.name, ar.name, a.title, g.name from playlist as p  
// INNER JOIN playlist_track as pt on pt.playlist_id = p.playlist_id 
// INNER JOIN track as t on t.track_id = pt.track_id 
// INNER JOIN album as a on a.album_id = t.album_id 
// INNER JOIN genre as g on g.genre_id = t.genre_id 
// INNER JOIN artist as ar on ar.artist_id = a.artist_id 
// where p.name = 'Music'; 



// IDeas 

// -- SELECT * FROM playlist 
// -- WHERE playlist.name = 'Music'; 

// -- SELECT pl.name, t.name, 
// -- FROM playlist pl 
// -- JOIN track t ON pl.playlist_id = t.track_id
// -- JOIN 



// Practice nested queries

// -- SELECT * 
// -- FROM invoice 
// -- WHERE invoice_id IN (
// -- SELECT invoice_id 
// -- FROM invoice_line 
// -- WHERE unit_price > 0.99
// -- ); 

// -- SELECT * 
// -- FROM playlist_track 
// -- WHERE playlist_id 
// -- IN (SELECT playlist_id FROM 
// -- playlist WHERE name = 'music'); 

// -- SELECT name 
// -- FROM track
// -- WHERE track_id IN 
// -- (SELECT track_id 
// -- FROM playlist_track 
// -- WHERE playlist_id = 5); 

// -- SELECT * 
// -- FROM track 
// -- WHERE genre_id IN (SELECT genre_id FROM genre WHERE name = 'Comedy');

// -- SELECT * 
// -- FROM track 
// -- WHERE album_id IN (SELECT album_id FROM album WHERE title = 'Fireball');

// -- SELECT * 
// -- From track 
// -- WHERE album_id IN (
// -- SELECT album_id FROM album WHERE artist_id IN (
// -- SELECT artist_id FROM artist WHERE name = 'Queen')); 



// -- Practice Updating Rows 

// -- UPDATE customer 
// -- SET fax = null 
// -- WHERE fax IS NOT null; 

// -- UPDATE customer 
// -- SET company = 'Self' 
// -- WHERE company IS null; 

// -- UPDATE customer 
// -- Set last_name = 'Thompson' 
// -- WHERE first_name = 'Julia' AND last_name = 'Barnett';

// -- Update customer 
// -- Set support_rep_id = 4
// -- WHERE email = 'luisrojas@yahoo.cl'

// -- UPDATE track 
// -- SET composer = 'The darkness around us'
// -- WHERE genre_id = (SELECT genre_id FROM genre WHERE name = 'Metal')
// -- AND composer IS null; 

// -- Group by 

// -- SELECT COUNT(*), g.name
// -- FROM track t 
// -- JOIN genre g ON t.genre_id = g.genre_id
// -- GROUP BY g.name; 

// -- SELECT COUNT(*), g.name 
// -- FROM track t 
// -- JOIN genre g ON g.genre_id = t.genre_id
// -- WHERE g.name = 'Pop' OR g.name = 'Rock'
// -- GROUP BY g.name; 

// -- SELECt ar.name, COUNT(*)
// -- FROM album al 
// -- JOIN artist ar ON ar.artist_id = al.artist_id
// -- GROUP BY ar.name; 


// -- Use Distinct 

// -- SELECT DISTINCT composer  
// -- FROM track; 

// -- SELECT DISTINCT billing_postal_code
// -- FROM invoice; 

// -- SELECT DISTINCT company 
// -- FROM customer; 

// -- Delete Rows 
// -- dummy table below

// -- CREATE TABLE practice_delete ( name TEXT, type TEXT, value INTEGER );
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'bronze', 50);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'bronze', 50);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'bronze', 50);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'silver', 100);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'silver', 100);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'gold', 150);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'gold', 150);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'gold', 150);
// -- INSERT INTO practice_delete ( name, type, value ) VALUES ('delete', 'gold', 150);

// -- SELECT * FROM practice_delete;

// -- DELETE FROM practice_delete WHERE type = 'bronze'; 
// -- DELETE FROM practice_delete WHERE type = 'silver'; 
// -- DELETE FROM practice_delete WHERE value = 150; 

// Tests for e-commerce 

// -- CREATE TABLE users (name TEXT, email TEXT, user_id SERIAL); 
// -- INSERT INTO users (name, email) VALUES ('Jacob', 'jb@gmail.com');
// -- INSERT INTO users (name, email) VALUES ('Zel', 'ZB@gmail.com'); 
// -- INSERT INTO users (name, email) VALUES ('Abby', 'AS@gmail.com'); 
// -- SELECT * FROM users; 

// -- CREATE TABLE products (name TEXT, price INTEGER, product_id SERIAL); 
// -- INSERT INTO products (name, price) VALUES ('zoo', 99); 
// -- INSERT INTO products (name, price) VALUES ('ranch', 9);
// -- INSERT INTO products (name, price) VALUES ('kennel', 900);
// -- SELECT * FROM products; 

// -- CREATE TABLE orders (product_id SERIAL); 
// -- ALTER TABLE orders ADD products TEXT; 

// -- INSERT INTO orders (products) VALUES ('ranch');
// -- INSERT INTO orders (products) VALUES ('farm'); 
// -- SELECT * FROM orders; 