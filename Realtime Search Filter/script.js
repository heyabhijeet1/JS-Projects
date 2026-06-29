let profiles = [
    {
        name: "Aditya Sharma",
        height: "6 ft",
        description: "Fitness enthusiast with a confident personality, known for his disciplined lifestyle and friendly attitude.",
        image_url: "https://i.pinimg.com/736x/db/45/b6/db45b6d4eb19b70f3d6eb66caaa23642.jpg"
    },
    {
        name: "Arjun Mehta",
        height: "5 ft 11 in",
        description: "A passionate traveler who enjoys exploring new places, meeting people, and capturing beautiful moments.",
        image_url: "https://i.pinimg.com/736x/e4/60/0f/e4600fe32564e374fdb70e242f3c556d.jpg"
    },
    {
        name: "Rohan Kapoor",
        height: "6 ft 1 in",
        description: "Creative and ambitious, with a love for photography, fashion, and modern aesthetics.",
        image_url: "https://i.pinimg.com/736x/f8/4e/68/f84e68e46dcfdf6d2822200091b72df2.jpg"
    },
    {
        name: "Karan Malhotra",
        height: "5 ft 10 in",
        description: "An energetic sports lover who enjoys staying active and motivating others to live a healthy life.",
        image_url: "https://i.pinimg.com/1200x/a2/75/8e/a2758e9bd0ce98e9649848bdc02e2eb9.jpg"
    },
    {
        name: "Vivaan Singh",
        height: "6 ft",
        description: "Calm, composed, and passionate about technology, always eager to learn and build innovative ideas.",
        image_url: "https://i.pinimg.com/736x/cd/13/b1/cd13b1fdb0d681a8b3390b3575864438.jpg"
    },
    {
        name: "Aarav Verma",
        height: "5 ft 4 in",
        description: "A cheerful personality with a love for music, coffee, and meaningful conversations.",
        image_url: "https://i.pinimg.com/736x/83/63/55/83635537a140eff2a5eb753ad06dab8f.jpg"
    },
    {
        name: "Kabir Nanda",
        height: "6 ft 2 in",
        description: "A dedicated gym-goer who believes consistency and hard work are the keys to success.",
        image_url: "https://i.pinimg.com/736x/76/0e/39/760e395ea735124b65d8506170a47e17.jpg"
    },
    {
        name: "Ishaan Khanna",
        height: "5 ft 11 in",
        description: "Loves reading books, coding, and discovering new ways to solve challenging problems.",
        image_url: "https://i.pinimg.com/736x/ef/fc/a0/effca074ca2d18674df5a0e27e48e22e.jpg"
    },
    {
        name: "Aryan Joshi",
        height: "5 ft 2 in",
        description: "Stylish and confident, with a passion for fashion trends and creative content creation.",
        image_url: "https://i.pinimg.com/736x/9c/2d/25/9c2d258c5cfb3f40e8fbe60bed8e9e36.jpg"
    },
    {
        name: "Dev Bansal",
        height: "5 ft 10 in",
        description: "Friendly, optimistic, and always ready for new adventures and unforgettable experiences.",
        image_url: "https://i.pinimg.com/736x/0b/94/2c/0b942c6110794203da81e0d6ed1f1791.jpg"
    },
    {
        name: "Ananya Sharma",
        height: "5 ft",
        description: "A confident and cheerful individual who enjoys traveling, photography, and spending time in nature.",
        image_url: "https://i.pinimg.com/736x/ee/e3/56/eee356ba12818b24ae90b014654d0261.jpg"
    },
    {
        name: "Priya Verma",
        height: "5 ft 4 in",
        description: "Creative and ambitious, with a passion for fashion, art, and meaningful conversations.",
        image_url: "https://i.pinimg.com/736x/27/5f/98/275f980f476b0d430854b7fffbda9fae.jpg"
    },
    {
        name: "Ishita Kapoor",
        height: "5 ft 6 in",
        description: "A fitness enthusiast who loves reading, coffee dates, and exploring new experiences.",
        image_url: "https://i.pinimg.com/736x/f2/81/fe/f281fe9c2d44423eaec22233deaec8d7.jpg"
    },
    {
        name: "Riya Mehta",
        height: "5 ft 3 in",
        description: "Friendly, optimistic, and passionate about music, traveling, and capturing memorable moments.",
        image_url: "https://i.pinimg.com/736x/32/cc/5d/32cc5db2593e48cf88f8a579d41eb9f2.jpg"
    },
    {
        name: "Kavya Singh",
        height: "5 ft 7 in",
        description: "An independent and adventurous personality who enjoys fitness, books, and discovering new places.",
        image_url: "https://i.pinimg.com/736x/5d/8a/9d/5d8a9d19a7ddb66df4826a3e9db2a2b1.jpg"
    }
];

let usersContainer = document.querySelector("#users");

function showUsers(arr) {
    usersContainer.style.display = "";
    usersContainer.style.justifyContent = "";
    usersContainer.style.alignItems = "";
    usersContainer.replaceChildren();

    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("bg-img");
        image.src = user.image_url;
        image.alt = user.name;

        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url("${user.image_url}")`;

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const height = document.createElement("h4");
        height.textContent = user.height;

        const description = document.createElement("p");
        description.textContent = user.description;

        content.append(heading, height, description);
        card.append(image, blurredLayer, content);
        usersContainer.append(card);
    });
}

showUsers(profiles);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    let query = inp.value.trim().toLowerCase();

    let newUsers = profiles.filter((user) => {
        return user.name.toLowerCase().includes(query);
    });

    if (newUsers.length > 0){
        showUsers(newUsers);
    }
    else {
        usersContainer.replaceChildren();
        usersContainer.style.display = "flex";
        usersContainer.style.justifyContent = "center";
        usersContainer.style.alignItems = "center";

        let no_user = document.createElement("h1");
        no_user.textContent = "No User Found";
        no_user.style.color = "white";
        no_user.style.textAlign = "center";
        no_user.style.width = "100%";
        no_user.style.margin = "0 auto";
        usersContainer.appendChild(no_user);
    }
});
