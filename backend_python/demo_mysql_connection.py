import mysql.connector
 
# connecting to the mysql server
db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="160302"
)
 
# cursor object c
c = db.cursor()
 





# case_insert = """INSERT INTO test1.users (
#    name,
#    password) 
#    VALUES  (%s, %s)"""
 
# # we save all the row data to be inserted in a data variable
# data = [("Vani", "100000"),
#         ("Krish", "60000"),
#         ("Aishwarya", "25000"),
#         ("Govind", "40000")]
 
# # execute the insert commands for all rows and commit to the database
# c.executemany(case_insert, data)
# db.commit()








# employeetbl_select = """SELECT * FROM test1.users"""
 
# # execute the select query to fetch all rows
# c.execute(employeetbl_select)
 
# # fetch all the data returned by the database
# employee_data = c.fetchall()
 
# # print all the data returned by the database
# for e in employee_data:
#     print(e)




# employeetbl_update = "UPDATE test1.users SET name = 'wuming' WHERE idusers = 1"
 
# # execute the update query to modify
# # the salary of employee with
# # employee id = 1 and commit to the database
# c.execute(employeetbl_update)
# db.commit()

employeetbl_delete = "DELETE FROM test1.users WHERE idusers=5"
 
# execute the delete statement and commit to the database
c.execute(employeetbl_delete)
db.commit()



 





# finally closing the database connection
db.close()