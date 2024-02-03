var myResume = {
    "Name":"Syed Badhusha",
    "Mobile Number": "+91-8122569394",
    "Mail ID":"syedbadhusha21@gmail.com",
    "address":{
        "Door No":"1/877",
        "Location":"Near Main Road",
        "Village":"Thaikkal",
        "Post":"Ayan perayur",
        "District":"Perambalur",
        "PIN":"621117"
    },
    "Objetive":`8+ years experienced as Tally customization and Backend development with Node JS for mobile application. 
    Proficient at implementing core backend development tasks including 3rd party API integrations with Tally. 
    Module development in tally as per Business Accounting requirement & deliver high quality products within the 
    stipulated deadlines. Possess a passion to learn and work on the latest technologies. Provides leadership, 
    training & feedback to ensure that teams perform to the best of their abilities & deliver consistently`,
    "Key Skills":{
        1:"Product Customization",
        2:"Backend Development",
        3:"3rd Party API Integration",
        4:"Tally DB Maintenance",
        5:"Automation Module",
        6:"Team Management",
        7:"Tally support and services",
        8:"REST API Development",
        9:"JSON and XML file handling"
    },
    "Technical Skills":{
        "Programming Languages":"TDL (Tally Definition Language), SQL, Node JS, REACT JS, Express JS",
        "Web Design":"HTML5, CSS, JavaScript",
        "Database":"MySQL, MS SQL Server",
        "Tools":"Visual Studio Code, MySQL Workbench, SQL Management Studio,Tally Developer Kit",
        "Version Control":"GITHUB"
    },
    "PROFESSIONAL EXPERIENCE":{
        "CHATURVEDI SOFTWARE HOUSE LLC":{
            "Role":"Senior Software Developer",
            "Location":"Dubai,UAE",
            "Period":"Oct 2018 - Nov 2023 (5 Years)",
            "Product":"Tally Accounting software, Mobile Application for view tally reports",
            "Programming Languages":"TDL (Tally Definition Language), Node JS, Express JS",
            "Database":"MySQL",
            "Team Size":3
        },
        "NOVA TECHNOSYS PRIVATE LIMITED":{
            "Role":"Software Developer",
            "Location":"Bengaluru,India",
            "Period":"Aug 2015 - Aug 2018 (3 Years) ",
            "Product":"Tally Accounting software",
            "Programming Languages":"TDL (Tally Definition Language)",
            "Team Size":8
        }
    },
    "Product and Development":{
        1:"Being a part of understanding entire Business and Accounting Implementation of customized module.",
        2:"Continuously analysing user behaviour to obtain preferences & analyse features.",
        3:"Creating a timeline of the feature set broken into small deployable chunks & assigning deadlines",
        4:"Executing & monitoring the development, testing and deployment of the various features on time.",
        5:"Have supported concern person whenever the requirement comes.",
        6:"Online and offline meeting with customer for understanding customer requirements.",
        7:"Technical support for implemented accounting module."
    },
    "Team Management":{
        1:"Following weekly once for product status and assigned task status.",
        2:"Conducting code reviews to verify quality.",
        3:"Support for Interviews and team construction.",
        4:"Support for tally product accounting methodology to team."
    },
    "EDUCATION":{
        "Batchelor of Technology":{
            "institute":"Trichy Engineering College",
            "Percentage": 61.6,
            "Location":"Trichy,TamilNadu,India",
            "period":"Aug 2008 - May 2012",
        },
        "HSC":{
            "institute":"Thanthai hans Roever Hr Sec School",
            "Percentage": 70.67,
            "Location":"Perambalur,TamilNadu,India",
            "period":"Jun 2007 - Mar 2008 ",
        },
        "SSLC":{
            "institute":" Nehru Hr Sec School",
            "Percentage": 76.2,
            "Location":"Perambalur,TamilNadu,India",
            "period":"Jun 2005 - Apr 2006",
        }    
    },
    "Other Information":{
        "Date Of Birth":"21-April-1990",
        "Gender":"Male",
        "Nationality":"Indian",
        "Marital Status":"Married"
    }
}

////  for loop
console.log("Resume has printed by for loop")
var resIndex = Object.values(myResume)

for(i=0;i<resIndex.length;i++)
{
    console.log(resIndex[i]);
}

//// For in Loop
console.log("Resume has printed by for - in loop")
for(i in myResume){
    console.log(myResume[i])
}
//// For Each loop
console.log("Resume has printed by for each loop")
var resIndex = Object.values(myResume)
resIndex.forEach((ele)=>console.log(ele));
//// For of loop

console.log("Resume has printed by for of loop")
var resIndex = Object.values(myResume)
for(i of resIndex){
    console.log(i)
}