/********************************************************
* This script creates the database named ttd_image_db 
*********************************************************/
USE ttd_view_nav_db;

-- create the tables for the database

CREATE TABLE thumb_images (
    thumb_id			INT 	PRIMARY KEY 	UNIQUE AUTO_INCREMENT,
    thumb_colA  		VARCHAR(150),
    thumb_colB  		VARCHAR(150),
    thumb_colC  		VARCHAR(150),
    thumb_colD  		VARCHAR(150)
);    


CREATE TABLE views (
    view_id          			INT 	PRIMARY KEY 	UNIQUE 	AUTO_INCREMENT, 
    view_colA 				VARCHAR(150),
    view_colB 				VARCHAR(150),
    view_colC 				VARCHAR(150),
    view_colD 				VARCHAR(150)
  
  -- CONSTRAINT use_categories_fk_products
  -- FOREIGN KEY (product_id)
  -- REFERENCES products(product_id) 
);

CREATE TABLE products (
	product_id				INT 	PRIMARY KEY 	UNIQUE AUTO_INCREMENT,
    product_short_name		VARCHAR(50),
    product_full_name		VARCHAR(50),
    product_description		VARCHAR(200)
);    


CREATE TABLE use_categories (
  use_id          			INT 	PRIMARY KEY 	UNIQUE 	AUTO_INCREMENT, 
  product_id				INT,
  use_category 				VARCHAR(100),
 -- image_sub_category   		VARCHAR(100),
 -- image_sub_category_order	INT,
 -- image_path_name			VARCHAR(200),
  
  CONSTRAINT use_categories_fk_products
  FOREIGN KEY (product_id)
  REFERENCES products(product_id) 
);


CREATE TABLE instruction_images (
	instruction_id 		INT		PRIMARY KEY,
    use_id				INT,		-- instruction, application, presentation
    technique			VARCHAR(100),
    instruction_order	INT,
	instruction_image	VARCHAR(200),
    
    CONSTRAINT instruction_images_fk_use_categories
    FOREIGN KEY (use_id)
    REFERENCES use_categories(use_id)
);    


CREATE TABLE instruction_captions (
 -- caption_id      	INT				PRIMARY KEY		AUTO_INCREMENT,
  instruction_id   	INT		PRIMARY KEY,
  caption_text1     VARCHAR(300),
  caption_text2		VARCHAR(200),
  caption_text3 	VARCHAR(200),
 
    CONSTRAINT instruction_captions_fk_instruction_images
    FOREIGN KEY (instruction_id)
    REFERENCES instruction_images(instruction_id)
);


-- Insert data into the tables

INSERT INTO thumb_images (thumb_id, thumb_colA, thumb_colB, thumb_colC, thumb_colD) VALUES
(1, 'components/components00_03/tmpl_00/thumb-view_00.jpg', 
    'components/components00_03/tmpl_01/thumb-view_01.jpg', 
    'components/components00_03/tmpl_02/thumb-view_02.jpg', 
    'components/components00_03/tmpl_03/thumb-view_03.jpg'),

(2, 'components/components04_07/tmpl_04/thumb-view_04.jpg', 
    'components/components04_07/tmpl_05/thumb-view_05.jpg',
    'components/components04_07/tmpl_06/thumb-view_06.jpg',
    'components/components04_07/tmpl_07/thumb-view_07.jpg'),

(3, 'components/components08_11/tmpl_08/thumb-view_08.jpg', 
    'components/components08_11/tmpl_09/thumb-view_09.jpg', 
    'components/components08_11/tmpl_10/thumb-view_10.jpg', 
    'components/components08_11/tmpl_11/thumb-view_11.jpg'), 
  
(4, 'components/components12_15/tmpl_12/thumb-view_12.jpg',  
    'components/components12_15/tmpl_13/thumb-view_13.jpg',  
    'components/components12_15/tmpl_14/thumb-view_14.jpg',  
    'components/components12_15/tmpl_15/thumb-view_15.jpg'),
    
(5, 'components/components16_19/tmpl_16/thumb-view_16.jpg',  
    'components/components16_19/tmpl_17/thumb-view_17.jpg',  
    'components/components16_19/tmpl_18/thumb-view_18.jpg',  
    'components/components16_19/tmpl_19/thumb-view_19.jpg'),
    
(6, 'components/components20_23/tmpl_20/thumb-view_20.jpg', 
    'components/components20_23/tmpl_21/thumb-view_21.jpg', 
    'components/components20_23/tmpl_22/thumb-view_22.jpg', 
    'components/components20_23/tmpl_23/thumb-view_23.jpg'),

(7, 'components/components24_27/tmpl_24/thumb-view_24.jpg', 
    'components/components24_27/tmpl_25/thumb-view_25.jpg',
    'components/components24_27/tmpl_26/thumb-view_26.jpg',
    'components/components24_27/tmpl_27/thumb-view_27.jpg'),

(8, 'components/components28_31/tmpl_28/thumb-view_28.jpg', 
    'components/components28_31/tmpl_29/thumb-view_29.jpg', 
    'components/components28_31/tmpl_30/thumb-view_30.jpg', 
    'components/components28_31/tmpl_31/thumb-view_31.jpg'), 
  
(9, 'components/components32_35/tmpl_32/thumb-view_32.jpg',  
    'components/components32_35/tmpl_33/thumb-view_33.jpg',  
    'components/components32_35/tmpl_34/thumb-view_34.jpg',  
    'components/components32_35/tmpl_35/thumb-view_35.jpg'),
    
(10, 'components/components36_39/tmpl_36/thumb-view_36.jpg',  
     'components/components36_39/tmpl_37/thumb-view_37.jpg',  
     'components/components36_39/tmpl_38/thumb-view_38.jpg',  
     'components/components36_39/tmpl_39/thumb-view_39.jpg'),
    
(11, 'components/components40_43/tmpl_40/thumb-view_40.jpg',  
     'components/components40_43/tmpl_41/thumb-view_41.jpg',  
     'components/components40_43/tmpl_42/thumb-view_42.jpg',  
     'components/components40_43/tmpl_43/thumb-view_43.jpg'),
    
(12, 'components/components44_47/tmpl_44/thumb-view_44.jpg',  
     'components/components44_47/tmpl_45/thumb-view_45.jpg',  
     'components/components44_47/tmpl_46/thumb-view_46.jpg',  
     'components/components44_47/tmpl_47/thumb-view_47.jpg');


INSERT INTO views (view_id, view_colA, view_colB, view_colC, view_colD) VALUES
(1, 'view00', 'view01', 'view02', 'view03'),
(2, 'view04', 'view05', 'view06', 'view07'),
(3, 'view08', 'view09', 'view10', 'view11'),
(4, 'view12', 'view13', 'view14', 'view15'),
(5, 'view16', 'view17', 'view18', 'view19'),
(6, 'view20', 'view21', 'view22', 'view23'),
(7, 'view24', 'view25', 'view26', 'view27'),
(8, 'view28', 'view29', 'view30', 'view31'),
(9, 'view32', 'view33', 'view34', 'view35'),
(10, 'view36', 'view37', 'view38', 'view39'),
(11, 'view40', 'view41', 'view42', 'view43'),
(12, 'view44', 'view45', 'view46', 'view47');


INSERT INTO products (product_id, product_short_name, product_full_name, product_description) VALUES
(1, 'EZG',	'EZ Grabbit',   'Tarp Tie Down'),
(2, 'MG',  	'Mini Grabbit',	'Tarp Tie Down'),
(3, 'RB',  	'Rock Buster',  'Ground Stake'),
(4, 'EZA', 	'EZ Adjust',	'Rope Adjuster'),
(5, 'BG',	'Bag Grabbit',	'Bag Holder'),
(6, 'KPR',	'Keeper',		'EZ Grabbit Keeper');	

INSERT INTO use_categories (use_id, product_id, use_category) VALUES
(1,		1,	'instruction'),
(2,		1,	'application'),
(3,		1,	'presentation'),
(4,		2,	'instruction'),
(5,		2,	'application'),
(6,		2,	'presentation'),
(7,		3,	'instruction'),
(8,		3,	'application'),
(9,		3,	'presentation');


INSERT INTO instruction_images (instruction_id, use_id, technique, instruction_order, instruction_image) VALUES
(1,		1,	'mount',	1,	'mount image path and name 1'),
(2,		1,	'mount',	2,	'mount image path and name 2'),
(3,		1,	'mount',	3,	'mount image path and name 3'),
(4,		1,	'mount',	4,	'mount image path and name 4'),
(5,		1,	'mount',	5,	'mount image path and name 5'),
(6,		1,	'mount',	6,	'mount image path and name 6'),
(7,		1,	'mount',	7,	'mount image path and name 7'),
(8,		1,	'mount',	8,	'mount image path and name 8');


INSERT INTO instruction_captions (instruction_id, caption_text1, caption_text2, caption_text3) VALUES
(1,	'caption text 1 for instruction 1', 'caption text 2 for instruction 1', 'caption text 3 for instruction 1'),
(2,	'caption text 1 for instruction 2', 'caption text 2 for instruction 2', 'caption text 3 for instruction 2'),
(3,	'caption text 1 for instruction 3', 'caption text 2 for instruction 3', 'caption text 3 for instruction 3'),
(4,	'caption text 1 for instruction 4', 'caption text 2 for instruction 4', 'caption text 3 for instruction 4'),
(5,	'caption text 1 for instruction 5', 'caption text 2 for instruction 5', 'caption text 3 for instruction 5'),
(6,	'caption text 1 for instruction 6', 'caption text 2 for instruction 6', 'caption text 3 for instruction 6'),
(7,	'caption text 1 for instruction 7', 'caption text 2 for instruction 7', 'caption text 3 for instruction 7'),
(8,	'caption text 1 for instruction 8', 'caption text 2 for instruction 8', 'caption text 3 for instruction 8');