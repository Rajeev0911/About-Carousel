let aboutSection = document.getElementById("aboutId");
let rightChangeBtn = document.getElementById("rightBtnId");
let leftChangeBtn = document.getElementById("leftBtnId");


let aboutJohnSmith = `John Smith is a web developer. He makes and maintains websites. He is in charge of a site's overall look and feel. He also handles the technical aspects of a website, including its performance (website speed) and capacity (the maximum amount of traffic the site could handle at a given time). He deals with different kinds of websites, including e-commerce, gaming, and news sites.`;

let abourCarlJohnson = `Carl is the underboss of the Grove Street Families, a fictional street gang based in his home city of Los Santos, San Andreas (a fictional parody of Los Angeles, California). The gang is led by his older brother, "Sweet" Johnson, with whom Carl became estranged after the death of their younger brother, Brian, in a gang-related attack prior to the events of the game..`;

let aboutEdSheeran = `Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play No. 5 Collaborations Project. He signed with Asylum Records the same year.`;

let aboutTonyStark = `Anthony Edward "Tony" Stark was born on May 29, 1970, in Manhattan, New York to Howard Stark, a famous genius inventor and businessman, and Maria Stark, a socialite and philanthropist. Growing up under the eye of family butler Edwin Jarvis, his life was characterized by a cold and affectionless relationship with his father.`;

let aboutTomCruise = `Thomas Cruise Mapother IV (born July 3, 1962), known professionally as Tom Cruise, is an American actor. One of the world's highest-paid actors,he has received various accolades, including an Honorary Palme d'Or and three Golden Globe Awards, in addition to nominations for four Academy Awards. His films have grossed over $4 billion in North America and over $11.5 billion worldwide.`;


class CardContent {
    constructor(source, name, work, about) {
        this.source = source;
        this.name = name;
        this.work = work;
        this.about = about;

    };
    
    cardImage() {
        let img = document.createElement("img");
        img.src = this.source;
        console.log(img.src)
        img.style.position = "absolute";
        img.style.borderRadius = "50%";
        img.style.height = "100%";
        img.style.width = "100%";
        img.style.zIndex = "1";
        let appendPlace = document.getElementById("imgId");
        appendPlace.appendChild(img);
    };

    peopleName() {
        let name = document.getElementById("nameId")
        name.textContent = "";
        let changedNameDiv = document.createElement("div");
        changedNameDiv.style.backgroundColor = "white";
        changedNameDiv.textContent = this.name;
        name.appendChild(changedNameDiv);
    };

    workRole() {
        let work = document.getElementById("workId");
        work.textContent = "";
        let changedWorkRoleDiv = document.createElement("div");
        changedWorkRoleDiv.style.backgroundColor = "white";
        changedWorkRoleDiv.textContent = this.work;
        work.appendChild(changedWorkRoleDiv);
    };

    aboutPeople() {
        let about = document.getElementById("aboutId");
        about.textContent = "";
        let changedAboutPeople = document.createElement("div");
        changedAboutPeople.style.backgroundColor = "white";
        changedAboutPeople.textContent = this.about;
        about.appendChild(changedAboutPeople);
    };

    surprise() {

        let surpriseBtn = document.getElementById("surpriseBtnId");
        surpriseBtn.onclick = () => {
            alert(`Heyy guys, ${this.name} here...`);

        };

    };
}




function card1func() {
    let card1 = new CardContent("people_img_1.jpg", "John Smith", "Web developer", aboutJohnSmith);
    card1.cardImage();
    card1.peopleName();
    card1.workRole();
    card1.aboutPeople();
    card1.surprise();

}

function card2func() {
    let card2 = new CardContent("people_img_2.jpg", "Carl Johnson", "Player", abourCarlJohnson);
    card2.cardImage();
    card2.peopleName();
    card2.workRole();
    card2.aboutPeople();
    card2.surprise();

};

function card3func() {
    let card3 = new CardContent("people_img_3.jpg", "Ed Sheeran", "POP Singer", aboutEdSheeran);
    card3.cardImage();
    card3.peopleName();
    card3.workRole();
    card3.aboutPeople();
    card3.surprise();

};

function card4func() {
    let card4 = new CardContent("people_img_4.jpg", "Tony Stark", "Avenger", aboutTonyStark);
    card4.cardImage();
    card4.peopleName();
    card4.workRole();
    card4.aboutPeople();
    card4.surprise();

};

function card5func() {
    let card5 = new CardContent("people_img_5.jpg", "Tom Cruise", "Actor", aboutTomCruise);
    card5.cardImage();
    card5.peopleName();
    card5.workRole();
    card5.aboutPeople();
    card5.surprise();

};



let index = 1;

function cardChanger(index) {
    if (index == 1 || index == -4) {
        card1func();

    } else if (index == 2 || index == -3) {
        card2func();

    } else if (index == 3 || index == -2) {
        card3func();

    } else if (index == 4 || index == -1) {
        card4func();

    } else if (index == 5 || index == 0) {
        card5func();


    };
}

cardChanger(index);

document.getElementById("changeCarouselButtons").addEventListener("click", (evt) => {
    let target = evt.target;
    if (target.id == "leftBtnId") {
        index--;
        if (index == -5) {
            index = 0;
        }
        cardChanger(index);

    } else if (target.id == "rightBtnId") {
        index++;
        if (index == 6) {
            index = 1;
        }
        cardChanger(index);

    }
    return index;
}, false);
