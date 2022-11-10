export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    };

    // get jwt token
    fetch(`http://localhost:5000/jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('foodie', data.token);
        })
        .catch(err => console.error('err', err));
};
