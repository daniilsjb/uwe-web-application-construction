const submitPostcard = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const content = document.getElementById('content');

    if (!name.checkValidity()) {
        alert('Please, enter a valid name!');
        return;
    }
    if (!email.checkValidity()) {
        alert('Please, enter a valid email!');
        return;
    }
    if (!content.checkValidity()) {
        alert('Please, enter valid content!');
        return;
    }

    alert('What a beautiful postcard!');
};
