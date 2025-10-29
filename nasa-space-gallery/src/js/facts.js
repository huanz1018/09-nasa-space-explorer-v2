const spaceFacts = [
    "A day on Venus is longer than a year on Venus.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Neutron stars are so dense that a sugar-cube-sized amount of material from one would weigh about as much as all of humanity.",
    "One million Earths could fit inside the sun.",
    "The footprints on the Moon will be there for millions of years because there is no wind to erode them.",
    "A year on Mercury is just 88 Earth days.",
    "The largest volcano in the solar system is Olympus Mons on Mars, which is about 13.6 miles high.",
    "Jupiter has a storm called the Great Red Spot that has been raging for over 350 years.",
    "Saturn's rings are made mostly of ice particles, with a smaller amount of rocky debris and dust.",
    "The Voyager 1 spacecraft, launched in 1977, is the farthest human-made object from Earth."
];

// Function to get a random space fact
const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    return spaceFacts[randomIndex];
};

// Export the function for use in other modules
export { getRandomFact };