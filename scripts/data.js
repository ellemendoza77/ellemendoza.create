const artworks = [
    {
        id: "castle_wall",
        title: "Castle Wall",
        medium: "Micron Pen on Paper",
        year: "2025",
        src: "assets/Art Portfolio/CastleWall.jpg",
        description: "I wanted to capture the feeling of looking up at a castle wall and feeling small in comparison to the history and architecture."
    },
    {
        id: "cats",
        title: "Feline Friends",
        medium: "Digital Art",
        year: "2025",
        src: "assets/Art Portfolio/Cats.jpg",
        description: "Using Procreate, I wanted to capture the personalities of these cats while exploring different textures and colors."
    },
    {
        id: "ceiling_art",
        title: "Union Station Ceiling",
        medium: "Photography",
        year: "2024",
        src: "assets/Art Portfolio/Ceiling_art206.jpg",
        description: "I took this photo to try to capture the history and story that is Union Station."
    },
    {
        id: "chicks",
        title: "Chicken Coop",
        medium: "Scratchboard",
        year: "2020",
        src: "assets/Art Portfolio/Chicks.jpg",
        description: "This is a scratchboard piece of chickens. I wanted to play around with the idea of using scratch art to create the same feeling of the woodgrain inside of the coop."
    },
    {
        id: "dancer",
        title: "Dancer",
        medium: "Charcoal on Toned Paper",
        year: "2020",
        src: "assets/Art Portfolio/Dancer.jpg",
        description: "Here I wanted to experiment with different proportions and angles of the body."
    },
    {
        id: "darkflower",
        title: "Midnight Bloom",
        medium: "Digital Illustration",
        year: "2025",
        src: "assets/Art Portfolio/Darkflower.jpg",
        description: "I created this piece to experiment with the idea of light and dark and how they can play off of each other."
    },
    {
        id: "dream_project",
        title: "Dreamstate",
        medium: "Digital Photography",
        year: "2024",
        src: "assets/Art Portfolio/Dream_Project_Art206.jpg",
        description: "I took this photo to try to capture the feeling of being in a dream."
    },
    {
        id: "flowers",
        title: "Floral Arrangement",
        medium: "Digital Illustration",
        year: "2023",
        src: "assets/Art Portfolio/Flowers.jpg",
        description: "A simple line drawing of a floral arrangement."
    },
    {
        id: "kent",
        title: "Hollow Heart",
        medium: "Micron Pen on Paper",
        year: "2024",
        src: "assets/Art Portfolio/Kent.jpg",
        description: "This is a portrait I did during a still life session. We were given 30 minutes to complete the portrait while thinking outside of the box."
    },
    {
        id: "paper_air",
        title: "Paper Air",
        medium: "Graphite on Paper",
        year: "2025",
        src: "assets/Art Portfolio/PaperAir.jpg",
        description: "Here is a drawing that is sectioned into four parts. Each section is a close up of paper airplanes in different positions that were set up in a still life. I took each photo from a different angle to try to capture different compositions."
    },
    {
        id: "school_of_fish",
        title: "School of Fish",
        medium: "Micron Pen on Paper",
        year: "2025",
        src: "assets/Art Portfolio/SchoolOfFish.jpg",
        description: "Here I wanted to play around with the idea of different art styles and how they can be used to create a cohesive piece. I used different patterns and textures to create a sense of movement and depth."
    },
    {
        id: "self",
        title: "Self",
        medium: "Charcoal, Graphite, Sumi Ink, Paint on Toned Paper",
        year: "2025",
        src: "assets/Art Portfolio/Self.jpg",
        description: "I created this piece to experiment with how each medium can be used to create a piece of art that can be seen as a self portrait while also up for interpretation."
    },
    {
        id: "self2",
        title: "Distorted Self",
        medium: "Graphite on Toned Paper",
        year: "2025",
        src: "assets/Art Portfolio/Self2.jpg",
        description: "As I continued to study human proportions, I wanted to experiment with how the medium can change the perception of the subject."
    },
    {
        id: "shadowless",
        title: "Shadowless Still Life",
        medium: "Graphite on Paper",
        year: "2025",
        src: "assets/Art Portfolio/Shadowless.jpg",
        description: "I was tasked to take photos of a still life then go into photoshop to mess with the image proportions and make a collage of the images that I enjoyed from the still life."
    },
    {
        id: "stardog",
        title: "Star Dog",
        medium: "Digital Illustration",
        year: "2025",
        src: "assets/Art Portfolio/StarDog.jpg",
        description: "Here is another piece that I wanted to experiment on Procreate. I wanted to play around with the textures I could create on a digital canvas."
    },
    {
        id: "stipple_cat",
        title: "Dotty Cat",
        medium: "Micron Pen on Paper",
        year: "2024",
        src: "assets/Art Portfolio/StippleCat.jpg",
        description: "I completely used stippling to create this piece. I wanted to experiment with how the density of the dots could create a sense of depth and texture."
    },
    {
        id: "treehouse",
        title: "Treehouse of Dreams",
        medium: "Micron on Paper",
        year: "2023",
        src: "assets/Art Portfolio/TreeHouse.jpg",
        description: "I wanted to create a piece that felt whimsical and magical. I love the idea of a treehouse and wanted to create my own version of it."
    },
    {
        id: "chick_photo",
        title: "Chicks",
        medium: "Photography",
        year: "2020",
        src: "assets/Art Portfolio/ChickPhoto.JPG",
        description: "Here is a photo of some chicks, later I made a scratchart work based off this photo."
    },
    {
        id: "christmas_tree",
        title: "Christmas Tree",
        medium: "Photography",
        year: "2024",
        src: "assets/Art Portfolio/ChristmasTree.PNG",
        description: "While I was exploring Union Station, I found this Christmas tree and wanted to play with different angles to create something interesting."
    },
    {
        id: "downtown",
        title: "Downtown",
        medium: "Photography",
        year: "2024",
        src: "assets/Art Portfolio/Downtown.JPEG",
        description: "Here is a photo of Downtown Kansas City, Missouri taken from the World War I museum."
    },
    {
        id: "grandfather_clock",
        title: "Grandfather Clock",
        medium: "Graphite and Colored Pencil on Paper",
        year: "2025",
        src: "assets/Art Portfolio/GranfatherClock.jpg",
        description: "Here is a piece I drew of a clock that my great grandfather hand carved. I added my own twist by adding a colorful array of flowers."
    },
    {
        id: "indoor_water",
        title: "Indoor Water",
        medium: "Photography",
        year: "2024",
        src: "assets/Art Portfolio/IndoorWater.PNG",
        description: "I wanted to play around with the motion of water and try to capture it in a still life."
    },
    {
        id: "symmetry_ceiling",
        title: "Historic Ceiling",
        medium: "Photography",
        year: "2024",
        src: "assets/Art Portfolio/SymetryCeiling.PNG",
        description: "The history of the Union Station is rich and interesting. I wanted to capture the beauty of the ceiling in a still life."
    },
    {
        id: "waterfall",
        title: "Waterfall",
        medium: "Photography",
        year: "2024",
        src: "assets/Art Portfolio/WaterFall.PNG",
        description: "Here is another photo of a waterfall taken from Union Station."
    }
];
