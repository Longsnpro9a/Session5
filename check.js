//---- 1:
// let str_input=prompt(`Enter string: `)
// let str_output=[];
// for(let i=0; i<str_input.length;++i)
// {
//     str_output.unshift(str_input[i]);
// }
// console.log(`${str_input} ==> ${str_output.join('')}`);


//---- 3:
// let arrayInput=prompt(`Enter array: `);
// let array = arrayInput.split(',');
// let newArray=[];
// for(let i=0; i<array.length; i++)
// {
//     if(newArray.indexOf(array[i])===-1)
//     {
//         newArray.push(array[i])
//     }
// }
// console.log(newArray);

//---- 4:
/*
const employeeMinx=
[
    {
        id: 1,
        Name: 'Long',
        Age: 21,
        Salary: 800,
        Position: 'Staff'

    }
]
while (true) {
    let input=prompt(` Create/Updated/Delete/Read/Exit`);
if(input.toLocaleUpperCase==="CREATE")
{
    employeeMinx.push(
    {
        id: employeeMinx.length+1,
        Name: prompt(`Enter name: `),
        Age: Number(prompt(`Enter age: `)),
        Salary: Number(prompt(`Enter salary: `)),
        Position: prompt(`Enter position: `)
    });
}
else if(input.toLocaleUpperCase==="DELETE")
{
    console.log(employeeMinx);
    let index=Number(prompt(`Enter id delete: `));
if(index <0 || index >= employeeMinx.length)
    {
        alert(`Enter id!!!!!???`);
    }
else
    {
        employeeMinx.splice(index,1);
    }
    console.log(employeeMinx);
}
else if(input.toLocaleUpperCase==="UPDATED")
{
    console.log(employeeMinx);
    let indexx=Number(prompt(`Enter id update: `));
if(indexx <0 || indexx >= employeeMinx.length)
    {
        alert(`Enter id!!!!!???`);
    }
else
    {
        employeeMinx[indexx].id=employeeMinx[indexx];
        employeeMinx[indexx].Name=prompt(`Enter name: `);
        employeeMinx[indexx].Age=Number(prompt(`Enter age: `));
        employeeMinx[indexx].Salary=Number(prompt(`Enter salary: `));
        employeeMinx[indexx].Position=rompt(`Enter position: `);
        console.log(employeeMinx);
    }
}
else if(input.toLocaleUpperCase==="READ")
{
    let read = Number(prompt(`Nhập id số muốn xem: `))
    alert(phoneNumber[read]);
}
else if(input.toLocaleUpperCase==="EXIT")
{
    break;
}
else
{
    alert(`Create/Updated/Delete/Read/Exit???`)
}
}
*/