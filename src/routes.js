import React from 'react';
import Admin from './components/admin/admin.js';
// import ListStaffs from './components/admin/accounts/listStaffs.js';
// import SkillUser from './components/user/skillUser/skillUser.js';
// import ProjectUser from './components/user/projectUser/projectUser.js';
// import Profile from './components/user/profile/profile.js';
// import AddAnAccount from './components/admin/accounts/addAnAccount.js';
import Require from './components/admin/skills/require.js';
import SkillList from './components/admin/skills/skillList.js';
import Projects from './components/admin/projects/projects.js';
// import Hr from './components/hr/hr.js';
// import AccountHr from './components/hr/accountHr.js';
// import SkillListHr from './components/hr/skillHr/skillList.js';
// import User from './components/user/user.js';
// import ProfileAdmin from './components/admin/profile/profileAdmin.js';
// import RequireHr from './components/hr/skillHr/require.js';
// import ProfileHR from './components/hr/profile/profileHR.js';


const routes = [
  {
    path: '/admin',
    exact: false,
    main: () => <Admin/>
  },
  {
    path: '/accounts',
    exact: false,
    main: () => <ListStaffs/>
  },
  {
    path: '/skills',
    exact: false,
    main: () => <SkillList/>
  },
  {
    path: '/requirements',
    exact: false,
    main: () => <Require/>
  },
  {
    path: '/project',
    exact: false,
    main: () => <Projects/>
  }
];
export default routes;
