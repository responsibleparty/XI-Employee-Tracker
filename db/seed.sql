INSERT INTO department (name)
VALUES ("Deli"),
    ("Meats"),
    ("Produce"),
    ("Guest Services");

INSERT INTO role (title, salary, department_id)
VALUES ("Butcher", 69000, 2),
        ("Sandwich Artist", 420000, 1),
        ("Brudder Chrees", 69420, 3),
        ("Gibby", 3003135, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Husk", "Tu", 4, null),
        ("Xiu", "Tu Glynn", 1, 1),
        ("Mila", "Tu", 2, 1),
        ("Gibby", "Tu Glynn", 3, 1);

