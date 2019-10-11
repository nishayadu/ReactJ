import React from 'react'
import Person from './Person';

function NameList(){
  {/*const names=['abc','def','ghi','jkl']
    const nameList = names.map(name=><h2>{name}</h2>)
    return(
        <div>
            {
                nameList
            }
        </div>
    ) */}

  {/*  const persons = [
        {
            id:1,
            name:'abc',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'qwe',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'xyz',
            age:35,
            skill:'Js'
        }
    ]
    const personList= persons.map(person => <Person key={person.id} person={person} />)
return <div>{personList} </div> */}

const names=['abc','def','xyz','abc']
const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
return <div>{nameList}</div>
}
export default NameList