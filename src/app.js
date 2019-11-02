function generate_password(len) {
    if(len < 7) {
        console.log("Minimum length is 7.");
        return;
    } else if (len > 100) {
        console.log("Maximum length is 100.");
        return;
    }

    const password_characters = {
        Capital_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        Small_chars: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*_=+-/.?<>)"
    };

    const password_characters_list = password_characters.Capital_chars
                                   + password_characters.Small_chars
                                   + password_characters.numbers
                                   + password_characters.symbols;

    let generated_password = "";

    console.log('Generating');
    for(let i = 0; i < len; i++)
    {
        let charCode = Math.floor(Math.floor(password_characters_list.length) * Math.random());
        generated_password += password_characters_list[charCode];
    }
    
    return generated_password;
}

console.log(generate_password(18));