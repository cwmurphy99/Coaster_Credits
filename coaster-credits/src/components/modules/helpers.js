export function firstLetterCase(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

export function splitTypeArray(arr) {
    return arr.join(" and ");
}

export function dateTimeFormatter(DateObject){

    const dateString = new Date(DateObject);

    const formattedDate = dateString.toDateString();

    return formattedDate

}
