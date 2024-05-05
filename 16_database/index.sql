create table customer {
    id varchar(10) not null primary key,
    name varchar(10) not null,
    birthday date not null
};

insert into customer (id, name, birthday) values
('aaa','김이현','1990-03-17'),
('bbb', '최지율','1992-11-01'),
('ccc','이혜진','1993-05-31');

create table order_list (
    id int auto_increment not null primary key,
    customer_id varchar(10) not null,
    product_name varchar(20) not null,
    quantity int,
    foreign key (customer_id) references customer(id) on update cascade on delete cascade
);

/* 외래키 제약조건
CASCADE : 참조 테이블이 삭제, 수정되면 참조하는 테이블이 같이 삭제, 수정
SET NULL : 참조 테이블이 삭제, 수정되면 참조하는 테이블이 NULL로 변경
NO ACTION : 참조 테이블이 삭제, 수정되면 참조하는 테이블은 변경 안됨
SET DEFAULT : 참조 테이블이 삭제, 수정되면 참조하는 테이블은 기본값으로 변경
RESTRICT : 참조하는 테이블에 데이터가 있으면 참조 테이블은 수정, 삭제가 안됨
*/

inserㅅ into order_list(customer_id, product_name, quantity) values
('aaa','맥북m1',1),
('bbb','빅파이',30),
('ccc','키보드'3),
('bbb','초코파이',5),
('ccc','텀블러',1);

SELECT * FROM customer AS a INNER JOIN order AS b ON a.id = b.customer_id;
SELECT a.product_name, a.price  FROM product AS a INNER JOIN ex.order AS b ON a.id=b.product_id WHERE customer_id='hello';