
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
export function formatData(data) {
    // Need somewhere to store our data
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    // Each section is going to represent a day so we loop over the days
    for (let sectionId = 0; sectionId < days.length; sectionId++) {
        // Get the current day we're currently looking for
        const currentDay = days[sectionId];

        // Get activities whose  current day starts
        const users = data.filter((user) => user.day.toUpperCase().indexOf(currentDay) === 0);

        // If there are any activity who have a day starting with the current day then we'll
        // add a new section otherwise we just skip over it
        if (users.length > 0) {
            // Add a section id to our array so the listview knows that we've got a new section
            sectionIds.push(sectionId);

            // Store any data we would want to display in the section header. In our case we want to show
            // the current day
            dataBlob[sectionId] = { character: currentDay };

            // Setup a new array that we can store the row ids for this section
            rowIds.push([]);

            // Loop over the valid users for this section
            for (let i = 0; i < users.length; i++) {
                // Create a unique row id for the data blob that the listview can use for reference
                const rowId = `${sectionId}:${i}`;

                // Push the row id to the row ids array. This is what listview will reference to pull
                // data from our data blob
                rowIds[rowIds.length - 1].push(rowId);

                // Store the data we care about for this row
                dataBlob[rowId] = users[i];
            }
        }
    }

    return { dataBlob, sectionIds, rowIds };
}
export function keyGenerator() {
    return Array(10 + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, 10);
};

export function getDay() {
    var d = new Date();
    var n = d.getDay()
    return days[n];
}
Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
