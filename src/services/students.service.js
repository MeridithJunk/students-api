const studentList = [
    {Name: 'Mer', Age: 3, id: 20055},
    {Name: 'Tess', Age: 5, id: 20053},
    {Name: 'Jared', Age: 6, id: 45652}
];


const get = function(_id){
    return getAll().find(student => student.id === _id);
}

const getAll = function(){
    return studentList;
}

module.exports = {
    get,
    getAll
};