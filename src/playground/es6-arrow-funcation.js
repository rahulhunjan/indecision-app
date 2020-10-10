'use strict';

console.log('app js is working');

//Some onject here
const user = {
    name: 'hunjan',
    Age: 27,
    Place: 'Pargue',
    option: []
};

//some conditions
function userLocation(Place){
if(Place){
 return Place;
} else{
    return 'unknown';
}
};


//JSX

const userAge = 28;
const template = (
<div>
<h1>{user.name ? user.name : 'false'}</h1>

<p>This is some paragraph</p>
{user.Age >=18 && <p>Welcome to this Hub as your age is {user.Age}</p>}
<p>Location:{userLocation(user.Place)}</p>
<p>{user.option.length > 0 ? 'here is your code' : 'Sorry'}</p>

</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
