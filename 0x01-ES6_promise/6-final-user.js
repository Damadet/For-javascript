import signUpUser  from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, filename){
    const userData = await signUpUser(firstName, lastName).then((data)=>({
        status: 'fulfilled',
        value: data
    }));

    const fileData = await uploadPhoto(filename).catch((error)=> ({
        status:'rejected',
        value: error.toString(),
    })
    )
    return Promise.resolve([userData, fileData]);
}

