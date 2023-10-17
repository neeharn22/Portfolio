CREATE TABLE Customer (
customer_id int(10) Primary Key,
first_name varchar(64),
last_name varchar(64),
email_id varchar(255),
address varchar(255),
contact_number varchar(32));


CREATE TABLE Destination (
dest_id int(10) PRIMARY KEY,
dest_name varchar(255),
dest_description varchar(255),
dest_location varchar(255)
);


CREATE TABLE Activity (
activity_id int(10) PRIMARY KEY,
dest_id int(10),
activity_name varchar(64),
activity_description varchar(255),
activity_duration int(10),
activity_price decimal(10,2)
);


CREATE TABLE Hotel_Accommodation (
accommodation_id int(10) PRIMARY KEY,
accommodation_name varchar(255),
accommodation_description varchar(255),
accommodation_price decimal(10,2),
accommodation_location varchar(255),
accommodation_booking_date date default sysdate()
);



CREATE TABLE Transportation (
transportation_id int(10) PRIMARY KEY,
transportation_type varchar(64),
departure_time time,
arrival_time time,
from_date date,
price decimal (10,2),
end_date date
);


CREATE TABLE Review (
review_id int(10) PRIMARY KEY,
customer_id int(10),
review_rating float(10),
review_comments varchar(255)
);


ALTER TABLE Activity  
ADD CONSTRAINT fk FOREIGN KEY (dest_id) REFERENCES Destination(dest_id);

ALTER TABLE Review  
ADD CONSTRAINT fk_2 FOREIGN KEY (customer_id) REFERENCES Customer(customer_id);


CREATE TABLE Car_Booking (
car_booking_id int(10) PRIMARY KEY,
transportation_id int(10),
cab_location varchar(64),
cab_type varchar(64)
);

ALTER TABLE Car_Booking  
ADD CONSTRAINT fk_3 FOREIGN KEY (transportation_id) REFERENCES Transportation(transportation_id);



CREATE TABLE Flight_Booking (
flight_booking_id int(10) PRIMARY KEY,
transportation_id int(10),
flight_number varchar(64),
flight_from varchar(64),
flight_to varchar(64),
airline_name varchar(64),
number_of_tickets int(15)
);

ALTER TABLE Flight_Booking  
ADD CONSTRAINT fk_4 FOREIGN KEY (transportation_id) REFERENCES Transportation(transportation_id);


CREATE TABLE Package (
package_id int(10) PRIMARY KEY,
dest_id int(10),
package_name varchar(255),
number_of_people int(10),
package_type varchar(64),
number_of_days int(10),
package_cost decimal (10,2)
);

ALTER TABLE Package  
ADD CONSTRAINT fk_5 FOREIGN KEY (dest_id) REFERENCES Destination(dest_id);




CREATE TABLE Booking (
booking_id int(10) PRIMARY KEY,
package_id int(10),
customer_id int(10),
accommodation_id int(10),
transportation_id int(10),
booking_date date
);

ALTER TABLE Booking  
ADD CONSTRAINT fk_6 FOREIGN KEY (package_id) REFERENCES Package(package_id);

ALTER TABLE Booking  
ADD CONSTRAINT fk_7 FOREIGN KEY (customer_id) REFERENCES Customer(customer_id);

ALTER TABLE Booking  
ADD CONSTRAINT fk_8 FOREIGN KEY (accommodation_id) REFERENCES Hotel_Accommodation(accommodation_id);

ALTER TABLE Booking  
ADD CONSTRAINT fk_9 FOREIGN KEY (transportation_id) REFERENCES Transportation(transportation_id);


# list those customers who have booked packages costing greater than or equal to  5000.
select c.customer_id,c.first_name,p.package_cost  from Customer c join Booking b on c.customer_id =b.customer_id 
join Package p on p.package_id =b.package_id where p.package_cost >=5000;



#list those customers who have opted for transportation type as flight and their destination is " New York City".
select * from Customer c join Booking b on c.customer_id = b.customer_id join
Package p on p.package_id = b.package_id join Destination d on d.dest_id =p.dest_id  where  b.transportation_id in (
Select t.transportation_id  from Transportation t where t.transportation_type like '%Flight%') and d.dest_name like  "New York City";
;

#select the total cost that company accomplished through  bookings done in month of january 2023;
select sum(p.package_cost) from Package p  where p.package_id in
(select b.package_id  from Booking b where booking_date like '2023-01-%');


#In this query, we are joining multiple tables together using their foreign key relationships. We are selecting fields from the customer, booking, package, and destination tables, 
#including the customer name, booking ID, package name, destination name, booking date, and booking state. We are also using a CASE statement to determine the booking price based on the booking state. If the booking state is 'confirmed', we use the confirmed price from the booking table. If the booking state is 'pending', we calculate the booking price as the base price of the package multiplied by the number of travelers in the booking. If the booking state is 'cancelled', we set the booking price to 0.

#Finally, we are using WHERE clauses to filter the results to a specific customer and bookings on or after a certain date. We are also sorting the results by booking date in descending order.
SELECT 
  c.first_name ,
  b.booking_id,
  p.package_name,
  d.dest_name,
  b.booking_date,
  p.package_cost ,
  CASE
    WHEN p.package_cost < 2000  THEN 'Silver'
    WHEN p.package_cost < 4000  THEN 'Gold'
    WHEN p.package_cost <= 6000  THEN 'Platinum'
  END AS package_category
FROM 
  Customer c 
  JOIN Booking b ON c.customer_id = b.customer_id 
  JOIN Package p ON b.package_id = p.package_id 
  JOIN Destination d ON p.dest_id = d.dest_id 
WHERE 
  c.customer_id in (1,2,3,4,5,6,7,8,9,10)
ORDER BY 
  b.booking_date DESC;
 
 
# In this query, we are using a subquery to calculate the average cost of package of  all bookings. We are then using the
# ANY operator to compare the package cost column from the outer query to the result of the subquery.
# The ANY operator returns true if the comparison holds true for any value in the subquery result set.
SELECT c.customer_id,c.first_name,c.first_name 
FROM Package p2  join Booking b on p2.package_id =b.package_id join Customer c on c.customer_id =b.booking_id 
WHERE package_cost >= ANY (
  SELECT AVG(package_cost)
  FROM Package p 
);
