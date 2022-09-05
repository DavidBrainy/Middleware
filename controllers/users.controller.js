const getUsers = (request, response) => {
    response.status(200).send("All users");
 };

const getUser = (request, response) => {
    response.status(200).send("Get single user");
 };

const createUser = (request, response) => {
    response.status(200).send("create user");
 };

const updateUser = (request, response) => {
    response.status(200).send("update user");
 };

const deleteUser = (request, response) => {
    response.status(200).send("delete user");
 };

 module.exports={
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
 };


