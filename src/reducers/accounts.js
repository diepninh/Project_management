import * as types from '../constaints/actionTypes.js';

const initalState = {
 users: [
   {id : 'B0001' , name : 'Hà Thế Trung' , email : 'trunght@bunbusoft.com'},
   {id : 'B0002' , name : 'Lê Văn Nghĩa' , email : 'ht@bunbusoft.com'},
   {id : 'B0003' , name : 'Lê Văn ' , email : 'nghia@bunbusoft.com'}
 ],
 skillListOfStaff: [
  {id : 'B0001' , name : 'Hà Thế Trung' , email : 'trunght@bunbusoft.com' , level : [0,1,2,3,1]},
  {id : 'B0002' , name : 'Lê Văn Nghĩa' , email : 'ht@bunbusoft.com' , level : [0,1.5,2.5,3,1]},
  {id : 'B0003' , name : 'Lê Văn ' , email : 'nghia@bunbusoft.com', level : [3,1.5,2.5,3,1]}
  ],
  ProjectList: [
    { name : 'Drag and Drop' , member : ['diệp'] , start : '1/1/2021' , deadline: '30/1/2021' , status : 'done'},
    { name : 'Project Management' , member : ['diệp', 'thắng'] , start : '1/1/2021' , deadline: '30/1/2021' , status : 'unfinished'}
  ],
  SearchStaffList : ''
};
const myReducer = (state = initalState, action) =>{
  switch(action.type){
    case types.CHANGEEMAIL:
      
      return {...state}; 
    default:
      return state; 
  }
}
export default myReducer;
