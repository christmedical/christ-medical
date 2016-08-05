module.exports = function(birthday) {
    debugger
    return Moment(birthday).month(0).from(Moment().month(0)).split(' ')[0];
}
