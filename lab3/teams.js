let teams =[
    {
        id:1,
        tname:"Rusty",
        tl:"Anuj",
        email:"anuj12@gmail.com",
        members:6,
    },
     {
        id:2,
        tname:"Rush",
        tl:"Anup ",
        email:'anup1212@gmail.com',
        members:6,
    },
];

let nextId =3;

export const getAllTeams = ()=> teams;

export const getTeamById =(id)=>teams.find((teams)=> teams.id===id);

export const addTeam = (newTeam)=>{
    const team= {id: nextId,newTeam};
    team.push(team);
    return team;
};
export const updateTeamById=(id,updateTeam) =>{
    const team = getTeamById(id);
    if(!team) return null;
    Object.assign(team,updateTeam);
    return team;
};

export const deleteTeam=(id)=>{
    const index = teams.findIndex((team)=>team.id===id);
    if(index==-1) return false;
    teams.splice (index,1);
    return true;

};