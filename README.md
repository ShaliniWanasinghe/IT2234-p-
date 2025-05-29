
# Database Name : UniDB
# Collection Name : students

(01)Insert document one data set for students collection.

<img width="452" alt="1_Insertion" src="https://github.com/user-attachments/assets/35aee5c3-b75a-4db5-bad7-2f28ed7714b1" />

(02)Insert one data set using db.students.insertOne() query.

<img width="730" alt="2_InsertOne" src="https://github.com/user-attachments/assets/4542de27-d9b8-48ec-ad5c-2c3995f7451e" />

(03)Insert data set using db.studentsMany() query.

<img width="730" alt="3_InsertMany_1" src="https://github.com/user-attachments/assets/9d111738-10d9-4191-ac8f-7fc5ebc0613b" />

<img width="730" alt="4_InsertMany_2" src="https://github.com/user-attachments/assets/1c3b63cd-39b3-4371-ab57-e08cf03c6749" />

# Updated Data collection.

<img width="705" alt="5_Updated_1" src="https://github.com/user-attachments/assets/541beb83-5bcc-4757-8251-0987c6eb0568" />

<img width="699" alt="5_Updated_2" src="https://github.com/user-attachments/assets/a444bb4b-309d-4226-a510-da0bae80f1eb" />

<img width="702" alt="5_Updated_3" src="https://github.com/user-attachments/assets/f7a5b43e-b744-4103-b3a4-790cd398fe4f" />

# db.students.find()

<img width="730" alt="4_find_1" src="https://github.com/user-attachments/assets/469b972f-50f0-44cc-879a-31ccfed3473c" />

<img width="729" alt="4_find_2" src="https://github.com/user-attachments/assets/c217ec34-6e52-4ba5-8721-873648a8b8c9" />

<img width="730" alt="4_find_3" src="https://github.com/user-attachments/assets/3bdf38db-99c6-43ad-b603-b2fc47f93bcc" />

(03)Filter only name and age.

Project  --> {name:1,age:1,_id:0}

<img width="701" alt="6_find_1" src="https://github.com/user-attachments/assets/3e3c3902-bf52-4475-85f8-e5ad53653864" />

<img width="704" alt="6_find_2" src="https://github.com/user-attachments/assets/8d9fa751-2ac9-4f5d-b871-cbe574208811" />

(04)Find the details whose regno is "2021IT001".

{regno:"2021IT001"}

<img width="701" alt="7_findregno" src="https://github.com/user-attachments/assets/02ebcddc-6b93-4373-8d33-baba6695fd48" />

shell query:

db.students.find({"regno":"2021IT001"})

<img width="730" alt="7_findregnoshell" src="https://github.com/user-attachments/assets/34c95150-4257-4125-a8bc-bf69ddecd046" />

(05)Find female students details.

{gender:"Female"}

<img width="710" alt="8_findFemale" src="https://github.com/user-attachments/assets/709cff79-5a83-4234-b486-52cb4c24bc0c" />

shell query:

db.students.find({gender:"Female"})

<img width="729" alt="8_findFemaleShell" src="https://github.com/user-attachments/assets/cf553985-ff99-40ce-b93c-727987e5b121" />

(06)Find the students whose age is greater than 24.

{age:{$gt:24}}

<img width="704" alt="9_ageGreater" src="https://github.com/user-attachments/assets/63f77331-daa2-48ee-a59d-afeb63f46b32" />

shell query:

db.students.find({age:{$gt:24}})
