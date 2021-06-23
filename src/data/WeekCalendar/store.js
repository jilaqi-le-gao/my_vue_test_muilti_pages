import seedData from './seed.js';

export const store = {
  state: {
    seedData
  },
  getActiveDay (){
    // 这个是找seedData每个元素的active属性是true的。则返回这个day。
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay (dayID){
    // 这行代码是吧一个？ ： 的判断函数，映射，map到seedData的所有元素上。
    // 如果这个元素的id是等于dayID，那么设置active=true
    // 不然，则是false。这样只保证了只有一个是true。
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayID ? dayObj.active = true : dayObj.active = false;
    })
  },
  submitEvent (eventDetails){
    const activeDay = this.getActiveDay();
    activeDay.events.push({ "details": eventDetails, "edit": false});
  },
  editEvent (dayId, eventDetails){
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  resetEditOfAllEvents () {
    this.state.seedData.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      })
    });
  },
  updateEvent (dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },
  getEventObj (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(
      day => day.id === dayId
    );
    return dayObj.events.find(
      event => event.details === eventDetails
    );
  },
  deleteEvent (dayId, eventDetails) {
    const dayObj = this.state.seedData.find(
      day => day.id === dayId
    );
    const eventIndexToRemove = dayObj.events.findIndex(
      event => event.details === eventDetails
    );
    dayObj.events.splice(eventIndexToRemove, 1);
  },
}
